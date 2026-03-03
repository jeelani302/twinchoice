import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moviesList = [
    { name: "Prisoners", tagline: "Every moment matters", genres: ["Crime", "Drama", "Mystery"] },
    { name: "Memories of Murder", tagline: "A serial killer in the countryside", genres: ["Crime", "Drama", "Mystery"] },
    { name: "Inglourious Basterds", tagline: "If you need heroes, send in the Basterds", genres: ["Adventure", "Drama", "War"] },
    { name: "Parasite", tagline: "Act like you own the place", genres: ["Comedy", "Drama", "Thriller"] },
    { name: "Interstellar", tagline: "Mankind was born on Earth. It was never meant to die here.", genres: ["Adventure", "Drama", "Sci-Fi"] },
    { name: "Oldboy", tagline: "15 years of imprisonment, 5 days of vengeance", genres: ["Action", "Drama", "Mystery"] },
    { name: "Fight Club", tagline: "Mischief. Mayhem. Soap.", genres: ["Drama"] },
    { name: "The Shawshank Redemption", tagline: "Fear can hold you prisoner. Hope can set you free.", genres: ["Drama"] },
    { name: "The Godfather", tagline: "An offer you can't refuse.", genres: ["Crime", "Drama"] },
    { name: "Mad Max: Fury Road", tagline: "What a lovely day.", genres: ["Action", "Adventure", "Sci-Fi"] },
    { name: "Whiplash", tagline: "The road to greatness can take you to the edge.", genres: ["Drama", "Music"] },
    { name: "The Matrix", tagline: "Welcome to the Real World.", genres: ["Action", "Sci-Fi"] },
    { name: "Goodfellas", tagline: "As far back as I can remember, I always wanted to be a gangster.", genres: ["Biography", "Crime", "Drama"] },
    { name: "Se7en", tagline: "Seven deadly sins. Seven ways to die.", genres: ["Crime", "Drama", "Mystery"] },
    { name: "Good Will Hunting", tagline: "Wildly brilliant.", genres: ["Drama", "Romance"] },
    { name: "The Dark Knight", tagline: "Why so serious?", genres: ["Action", "Crime", "Drama"] }
];

async function fetchTMDBImage(movieName) {
    try {
        const query = encodeURIComponent(movieName);
        // Using a free public TMDB proxy or OMDB if possible? 
        // Let's use TVMaze API which is free without keys, though it's for TV.
        // For movies, let's use the Wikipedia info again but with prop=images and fetch the first one.

        let title = encodeURIComponent(movieName + " (film)");
        let url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&redirects=1&prop=images&imlimit=5&format=json`;
        let res = await fetch(url, { headers: { 'User-Agent': 'TwinChoice/1.0 (contact@example.com)' } });
        let json = await res.json();
        let pages = json.query.pages;
        let pageId = Object.keys(pages)[0];

        if (pageId === "-1") {
            title = encodeURIComponent(movieName);
            url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&redirects=1&prop=images&imlimit=5&format=json`;
            res = await fetch(url, { headers: { 'User-Agent': 'TwinChoice/1.0 (contact@example.com)' } });
            json = await res.json();
            pages = json.query.pages;
            pageId = Object.keys(pages)[0];
        }

        if (pageId !== "-1" && pages[pageId].images) {
            // Find an image that looks like a poster
            const images = pages[pageId].images;
            let posterFile = images.find(img => img.title.toLowerCase().includes('poster') || img.title.toLowerCase().includes('cover'));
            if (!posterFile) posterFile = images[0]; // fallback

            if (posterFile) {
                const imgTitle = encodeURIComponent(posterFile.title);
                const imgUrlReq = `https://en.wikipedia.org/w/api.php?action=query&titles=${imgTitle}&prop=imageinfo&iiprop=url&format=json`;
                const imgRes = await fetch(imgUrlReq, { headers: { 'User-Agent': 'TwinChoice/1.0 (contact@example.com)' } });
                const imgJson = await imgRes.json();
                const imgPages = imgJson.query.pages;
                const imgPageId = Object.keys(imgPages)[0];
                if (imgPages[imgPageId].imageinfo) {
                    return imgPages[imgPageId].imageinfo[0].url;
                }
            }
        }
        return "https://via.placeholder.com/500x750?text=No+Image";
    } catch (e) {
        return "https://via.placeholder.com/500x750?text=Error";
    }
}

async function run() {
    const finalMovies = [];
    for (let i = 0; i < moviesList.length; i++) {
        const movie = moviesList[i];
        console.log(`Fetching poster for ${movie.name}...`);
        const imgUrl = await fetchTMDBImage(movie.name);
        finalMovies.push({
            id: i + 1,
            name: movie.name,
            image: imgUrl,
            tagline: movie.tagline,
            genres: movie.genres
        });
    }

    const jsContent = `const movies = ${JSON.stringify(finalMovies, null, 2)};\n\nexport default movies;\n`;
    fs.writeFileSync(path.join(__dirname, 'src', 'data', 'movies.js'), jsContent, 'utf-8');
    console.log('Successfully updated movies.js');
}

run();
