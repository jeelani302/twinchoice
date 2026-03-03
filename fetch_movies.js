import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moviesList = [
    { name: "Prisoners", tagline: "", genres: [] },
    { name: "Memories of Murder", tagline: "", genres: [] },
    { name: "Inglourious Basterds", tagline: "", genres: [] },
    { name: "Parasite", tagline: "", genres: [] },
    { name: "Interstellar", tagline: "", genres: [] },
    { name: "Oldboy", tagline: "", genres: [] },
    { name: "Fight Club", tagline: "", genres: [] },
    { name: "The Shawshank Redemption", tagline: "", genres: [] },
    { name: "The Godfather", tagline: "", genres: [] },
    { name: "Mad Max: Fury Road", tagline: "", genres: [] },
    { name: "Whiplash", tagline: "", genres: [] },
    { name: "The Matrix", tagline: "", genres: [] },
    { name: "Goodfellas", tagline: "", genres: [] },
    { name: "Se7en", tagline: "", genres: [] },
    { name: "Good Will Hunting", tagline: "", genres: [] },
    { name: "The Dark Knight", tagline: "", genres: [] } // 16 movies
];

async function fetchWikiImage(movieName) {
    try {
        const title = encodeURIComponent(movieName + " (film)");
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&redirects=1&prop=pageimages&format=json&pithumbsize=500`;
        const res = await fetch(url, { headers: { 'User-Agent': 'TwinChoice/1.0 (contact@example.com)' } });

        if (!res.ok) {
            return "https://via.placeholder.com/500x750?text=Error";
        }
        const json = await res.json();
        const pages = json.query.pages;
        let pageId = Object.keys(pages)[0];

        let imgUrl = pages[pageId]?.thumbnail ? pages[pageId].thumbnail.source : null;

        // If it fails with " (film)", try without it
        if (!imgUrl || pageId === "-1") {
            const title2 = encodeURIComponent(movieName);
            const url2 = `https://en.wikipedia.org/w/api.php?action=query&titles=${title2}&redirects=1&prop=pageimages&format=json&pithumbsize=500`;
            const res2 = await fetch(url2, { headers: { 'User-Agent': 'TwinChoice/1.0 (contact@example.com)' } });
            const json2 = await res2.json();
            const pages2 = json2.query.pages;
            const pageId2 = Object.keys(pages2)[0];
            imgUrl = pages2[pageId2]?.thumbnail ? pages2[pageId2].thumbnail.source : "https://via.placeholder.com/500x750?text=No+Image";
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
