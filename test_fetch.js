const fetchWikiImage = async (actorName) => {
    try {
        const title = encodeURIComponent(actorName);
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=500`;
        const res = await fetch(url, { headers: { 'User-Agent': 'TwinChoice/1.0 (test@example.com)' } });
        const data = await res.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        const imgUrl = pages[pageId].thumbnail ? pages[pageId].thumbnail.source : "None";
        console.log(actorName, "->", imgUrl);
    } catch (e) {
        console.error("Error", e);
    }
}
fetchWikiImage("Marlon Brando");
fetchWikiImage("Robert De Niro");
