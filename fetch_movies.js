import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moviesList = [
    { name: "Prisoners", search: "Prisoners_(2013_film)", tagline: "Every moment matters", genres: ["Crime", "Drama", "Mystery"] },
    { name: "Memories of Murder", search: "Memories_of_Murder", tagline: "A serial killer in the countryside", genres: ["Crime", "Drama", "Mystery"] },
    { name: "Inglourious Basterds", search: "Inglourious_Basterds", tagline: "If you need heroes, send in the Basterds", genres: ["Adventure", "Drama", "War"] },
    { name: "Parasite", search: "Parasite_(2019_film)", tagline: "Act like you own the place", genres: ["Comedy", "Drama", "Thriller"] },
    { name: "Interstellar", search: "Interstellar_(film)", tagline: "Mankind was born on Earth. It was never meant to die.", genres: ["Adventure", "Drama", "Sci-Fi"] },
    { name: "Oldboy", search: "Oldboy_(2003_film)", tagline: "15 years of imprisonment, 5 days of vengeance", genres: ["Action", "Drama", "Mystery"] },
    { name: "Fight Club", search: "Fight_Club", tagline: "Mischief. Mayhem. Soap.", genres: ["Drama"] },
    { name: "The Shawshank Redemption", search: "The_Shawshank_Redemption", tagline: "Fear can hold you prisoner. Hope can set you free.", genres: ["Drama"] },
    { name: "The Godfather", search: "The_Godfather", tagline: "An offer you can't refuse.", genres: ["Crime", "Drama"] },
    { name: "Mad Max: Fury Road", search: "Mad_Max:_Fury_Road", tagline: "What a lovely day.", genres: ["Action", "Adventure", "Sci-Fi"] },
    { name: "Whiplash", search: "Whiplash_(2014_film)", tagline: "The road to greatness can take you to the edge.", genres: ["Drama", "Music"] },
    { name: "The Matrix", search: "The_Matrix", tagline: "Welcome to the Real World.", genres: ["Action", "Sci-Fi"] },
    { name: "Goodfellas", search: "Goodfellas", tagline: "As far back as I can remember, I always wanted to be a gangster.", genres: ["Biography", "Crime", "Drama"] },
    { name: "Se7en", search: "Seven_(1995_film)", tagline: "Seven deadly sins. Seven ways to die.", genres: ["Crime", "Drama", "Mystery"] },
    { name: "Good Will Hunting", search: "Good_Will_Hunting", tagline: "Wildly brilliant.", genres: ["Drama", "Romance"] },
    { name: "The Dark Knight", search: "The_Dark_Knight", tagline: "Why so serious?", genres: ["Action", "Crime", "Drama"] }
];

async function fetchWikiHtmlImage(searchStr) {
    try {
        const url = `https://en.wikipedia.org/wiki/${searchStr}`;
        const res = await fetch(url, { headers: { 'User-Agent': 'TwinChoice/1.0 (contact@example.com)' } });
        const html = await res.text();

        // Find infobox image
        const match = html.match(/class="[^"]*infobox-image[^"]*"[^>]*>.*?<img[^>]*src="([^"]+)"/i);
        if (match) {
            let imgUrl = match[1];
            if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
            // Upgrade thumbnail resolution from e.g. 220px to 500px for crisp cards
            imgUrl = imgUrl.replace(/\/\d+px-/, '/500px-');
            return imgUrl;
        }

        // Return placeholder if not found
        return "https://via.placeholder.com/500x750?text=No+Poster";
    } catch (e) {
        return "https://via.placeholder.com/500x750?text=Error";
    }
}

async function run() {
    const finalMovies = [];
    for (let i = 0; i < moviesList.length; i++) {
        const movie = moviesList[i];
        console.log(`Fetching poster for ${movie.name}...`);
        const imgUrl = await fetchWikiHtmlImage(movie.search);
        console.log(`Got: ${imgUrl}`);
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
