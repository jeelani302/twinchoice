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

async function fetchWikiImage(movieName) {
    try {
        let title = encodeURIComponent(movieName + " (film)");
        let url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&redirects=1&prop=pageimages&format=json&pithumbsize=500`;
        let res = await fetch(url, { headers: { 'User-Agent': 'TwinChoice/1.0 (contact@example.com)' } });
        let json = await res.json();
        let pages = json.query.pages;
        let pageId = Object.keys(pages)[0];
        let imgUrl = pages[pageId]?.thumbnail ? pages[pageId].thumbnail.source : null;

        if (!imgUrl) {
            // Try without "(film)"
            title = encodeURIComponent(movieName);
            url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&redirects=1&prop=pageimages&format=json&pithumbsize=500`;
            res = await fetch(url, { headers: { 'User-Agent': 'TwinChoice/1.0 (contact@example.com)' } });
            json = await res.json();
            pages = json.query.pages;
            pageId = Object.keys(pages)[0];
            imgUrl = pages[pageId]?.thumbnail ? pages[pageId].thumbnail.source : null;
        }

        if (!imgUrl) {
            // Fallbacks for specific movies
            if (movieName === "Oldboy") return "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/500px-Oldboykoreanposter.jpg";
            if (movieName === "Parasite") return "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Parasite_%282019_film%29.png/500px-Parasite_%282019_film%29.png";
            if (movieName === "Se7en") return "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Seven_%28movie%29_poster.jpg/500px-Seven_%28movie%29_poster.jpg";
            return "https://via.placeholder.com/500x750?text=No+Image";
        }

        return imgUrl;
    } catch (e) {
        return "https://via.placeholder.com/500x750?text=Error";
    }
}

async function run() {
    const finalMovies = [];
    for (let i = 0; i < moviesList.length; i++) {
        const movie = moviesList[i];
        console.log(`Fetching image for ${movie.name}...`);
        const imgUrl = await fetchWikiImage(movie.name);
        finalMovies.push({
            id: i + 1,
            name: movie.name,
            image: imgUrl || "https://via.placeholder.com/500x750?text=No+Image",
            tagline: movie.tagline,
            genres: movie.genres
        });
    }

    const jsContent = `const movies = ${JSON.stringify(finalMovies, null, 2)};\n\nexport default movies;\n`;
    fs.writeFileSync(path.join(__dirname, 'src', 'data', 'movies.js'), jsContent, 'utf-8');
    console.log('Successfully updated movies.js');
}

run();
