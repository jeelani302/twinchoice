import React, { useMemo } from "react";

function generateSummary(winner, eliminated, section, subCategory) {
    // Tally genres from all chosen winners along the way
    const g = winner.genres || [];
    const primary = g[0] || "Drama";
    const isActor = section === "actors";
    const isIndian = subCategory === "indian";

    const actorSummaries = {
        Drama: "You're drawn to raw emotion and powerful storytelling. You value depth, vulnerability, and performances that leave you thinking for days.",
        Action: "You love adrenaline-pumping spectacles and larger-than-life heroes. Intensity and physicality speak to your soul.",
        Comedy: "You appreciate wit, charm, and the magic of laughter. Life's too short not to enjoy a brilliant comedic performance.",
        "Sci-Fi": "You're a visionary — fascinated by the unknown, drawn to futuristic worlds and mind-bending concepts.",
        Thriller: "You crave suspense and unpredictability. You love being kept on the edge of your seat, guessing what comes next.",
        Biopic: "You're inspired by real stories and the human spirit. True tales of triumph and struggle resonate deeply with you.",
        Romance: "You're a hopeless romantic at heart. Love stories and emotional connections are what make cinema magical for you.",
        Fantasy: "You love escapism and wonder. Magical worlds, epic quests, and larger-than-life mythology captivate your imagination.",
        Musical: "Rhythm, melody, and performance move you. You believe music and cinema together create the ultimate art form.",
        Period: "You appreciate elegance, history, and the beauty of bygone eras. Rich costumes and nuanced performances captivate you.",
        Historical: "You're drawn to stories rooted in truth. The weight of history and its heroes speak powerfully to you.",
        Mystery: "You love unraveling puzzles. Clever plots and unexpected revelations keep your mind engaged and delighted.",
        Narration: "You appreciate the power of a great voice and storytelling craft. Atmosphere and wisdom draw you in.",
        Social: "You appreciate films that reflect society's truths. You look for cinema that not only entertains but makes a meaningful statement.",
        Arthouse: "You're an intellectual cinephile. You prefer the nuance of performance and artistic vision over commercial tropes.",
    };

    const movieSummaries = {
        Drama: "You appreciate stories that explore the complexities of human nature, seeking out cinema that challenges and moves you deeply.",
        Action: "You thrive on high-stakes adventure and kinetic storytelling. For you, the ultimate movie is an exhilarating ride of courage and skill.",
        Comedy: "You believe in the power of joy and clever wit. You look for movies that can brighten any day with laughter and heart.",
        "Sci-Fi": "You are a seeker of future possibilities. You love movies that break the boundaries of reality and expand the limits of your imagination.",
        Thriller: "You enjoy the thrill of the chase and the tension of the unknown. Suspensful, twisting plots are your cinematic bread and butter.",
        Crime: "You're fascinated by the undercurrents of society – the gritty, the moral grey areas, and the tension of the high-stakes underworld.",
        Adventure: "You have a spirit of exploration. You love movies that take you on epic journeys to distant lands and untold stories.",
        Horror: "You embrace the darkness and the adrenaline of the unknown. You appreciate movies that can haunt your thoughts and quicken your pulse.",
        Mystery: "You are a detective at heart. You love unravelling complex puzzles and being outsmarted by a brilliant, hidden truth.",
        War: "You're drawn to the weight of history and the resilience of the human spirit in the most challenging of times.",
        Biography: "You find inspiration in true stories. You value the legacy of real people and the incredible journeys they've undertaken.",
    };

    const taste = isActor
        ? (actorSummaries[primary] || actorSummaries["Drama"])
        : (movieSummaries[primary] || movieSummaries["Drama"]);

    const label = isActor ? (isIndian ? "Indian Actor" : "Actor") : "Movie";

    const leadText = isActor
        ? `Your choice of **${winner.name}** as your favorite ${label} reveals a lot about your taste!`
        : `Your ultimate favorite movie is **${winner.name}**! This choice says something special about you.`;

    return `${leadText} ${taste}`;
}

export default function ResultScreen({ winner, eliminated, onRestart, section, subCategory }) {
    const summary = useMemo(
        () => generateSummary(winner, eliminated, section, subCategory),
        [winner, eliminated, section, subCategory]
    );

    const genresText = winner.genres ? winner.genres.join(" • ") : "";
    const isIndian = subCategory === "indian";

    return (
        <div className="result-screen" id="result-screen">
            <div className="result-screen__card">
                <div className="result-screen__trophy">👑</div>
                <h1 className="result-screen__heading">
                    {section === "actors"
                        ? (isIndian ? "Your Ultimate Favorite Indian Actor" : "Your Ultimate Favorite Foreign Actor")
                        : "Your Ultimate Favorite Movie"}
                </h1>
                <div className="result-screen__winner">
                    <div className="result-screen__image-wrapper">
                        <img
                            src={winner.image || winner.poster}
                            alt={winner.name || winner.title}
                            className="result-screen__image"
                        />
                        <div className="result-screen__shine" />
                    </div>
                    <h2 className="result-screen__name">{winner.name || winner.title}</h2>
                    <p className="result-screen__tagline">
                        {winner.tagline && <span>"{winner.tagline}"</span>}
                        {winner.tagline && genresText && <br />}
                        {genresText && <span className="result-screen__genres">{genresText}</span>}
                    </p>
                </div>

                <div className="result-screen__summary">
                    <h3>Your Taste Profile</h3>
                    <p dangerouslySetInnerHTML={{
                        __html: summary.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    }} />
                </div>

                <button
                    className="result-screen__restart"
                    onClick={onRestart}
                    id="restart-button"
                >
                    <span>Play Again</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 4 23 10 17 10" />
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
