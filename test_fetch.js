import https from 'https';

function fetchWikiImage(movieName) {
    return new Promise((resolve) => {
        const title = encodeURIComponent(movieName + " (film)");
        const options = {
            hostname: 'en.wikipedia.org',
            path: `/w/api.php?action=query&titles=${title}&redirects=1&prop=pageimages&format=json&pithumbsize=500`,
            headers: {
                'User-Agent': 'TwinChoice/1.0 (contact@example.com)'
            }
        };

        https.get(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(movieName, "response:", data);
                resolve();
            });
        }).on('error', (e) => {
            console.error(e);
            resolve();
        });
    });
}

fetchWikiImage("The Godfather");
