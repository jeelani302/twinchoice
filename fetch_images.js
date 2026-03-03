const https = require('https');
const fs = require('fs');
const path = require('path');

const actorsList = [
    { name: "Marlon Brando", tagline: "The pioneer of method acting", genres: ["Drama", "Crime", "Classic"] },
    { name: "Al Pacino", tagline: "Intense energy and iconic crime boss roles", genres: ["Crime", "Drama", "Thriller"] },
    { name: "Robert De Niro", tagline: "Chameleon-like devotion to complex characters", genres: ["Crime", "Drama", "Thriller"] },
    { name: "Clint Eastwood", tagline: "The ultimate western anti-hero and tough guy", genres: ["Western", "Action", "Drama"] },
    { name: "Harrison Ford", tagline: "The quintessential charming rogue of adventure", genres: ["Action", "Sci-Fi", "Adventure"] },
    { name: "Denzel Washington", tagline: "Commanding screen presence and gravitas", genres: ["Drama", "Action", "Thriller"] },
    { name: "Tom Hanks", tagline: "America's most beloved everyman", genres: ["Drama", "Comedy", "War"] },
    { name: "Morgan Freeman", tagline: "The voice of wisdom and gravitas", genres: ["Drama", "Mystery", "Crime"] },
    { name: "Anthony Hopkins", tagline: "Chilling precision and theatrical grandeur", genres: ["Thriller", "Drama", "Horror"] },
    { name: "Jack Nicholson", tagline: "Manic energy and rebellious charm", genres: ["Drama", "Thriller", "Horror"] },
    { name: "Leonardo DiCaprio", tagline: "Intense method actor known for dramatic roles", genres: ["Drama", "Thriller", "Biopic"] },
    { name: "Brad Pitt", tagline: "Cool charisma meets artistic ambition", genres: ["Drama", "Action", "Comedy"] },
    { name: "Christian Bale", tagline: "Extreme dedication and physical transformation", genres: ["Action", "Drama", "Thriller"] },
    { name: "Joaquin Phoenix", tagline: "Raw vulnerability and unpredictable intensity", genres: ["Drama", "Thriller", "Biopic"] },
    { name: "Samuel L. Jackson", tagline: "Electrifying energy on every screen", genres: ["Action", "Thriller", "Crime"] },
    { name: "Keanu Reeves", tagline: "Action legend with a heart of gold", genres: ["Action", "Sci-Fi", "Thriller"] } // 16 actors
];

function fetchWikiImage(actorName) {
    return new Promise((resolve) => {
        const title = encodeURIComponent(actorName);
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=500`;

        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const pages = json.query.pages;
                    const pageId = Object.keys(pages)[0];
                    const imgUrl = pages[pageId].thumbnail ? pages[pageId].thumbnail.source : "https://via.placeholder.com/500x750?text=No+Image";

                    resolve(imgUrl);
                } catch (e) {
                    resolve("https://via.placeholder.com/500x750?text=Error");
                }
            });
        }).on('error', () => {
            resolve("https://via.placeholder.com/500x750?text=Error");
        });
    });
}

async function run() {
    const finalActors = [];
    for (let i = 0; i < actorsList.length; i++) {
        const actor = actorsList[i];
        console.log(`Fetching image for ${actor.name}...`);
        const imgUrl = await fetchWikiImage(actor.name);
        finalActors.push({
            id: i + 1,
            name: actor.name,
            image: imgUrl,
            tagline: actor.tagline,
            genres: actor.genres
        });
    }

    const jsContent = `const actors = ${JSON.stringify(finalActors, null, 2)};\n\nexport default actors;\n`;
    fs.writeFileSync(path.join(__dirname, 'src', 'data', 'actors.js'), jsContent, 'utf-8');
    console.log('Successfully updated actors.js');
}

run();
