async function test() {
    try {
        const res = await fetch("https://en.wikipedia.org/wiki/Prisoners_(2013_film)");
        const html = await res.text();
        console.log("HTML length:", html.length);
        const match = html.match(/<img[^>]*src="([^"]+)"/ig);
        if (match) {
            console.log("Images found:", match.length);
            console.log(match.slice(0, 10)); // print first 10
        } else {
            console.log("Not found.");
        }
    } catch (e) {
        console.error(e);
    }
}
test();
