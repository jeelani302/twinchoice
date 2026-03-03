const https = require('https');

const title = encodeURIComponent("The Godfather");

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
        console.log("Godfather response:", data);
    });
}).on('error', (e) => {
    console.error(e);
});
