import React, { useMemo } from "react";

function generateSummary(winner, eliminated) {
    // Tally genres from all chosen winners along the way
    const genreCounts = {};
    const allChosen = [...eliminated.map((e) => e.loser ? null : e).filter(Boolean), winner];

    // Actually, let's use the winner's genres + a fun quip
    const g = winner.genres || [];
    const primary = g[0] || "Drama";

    const summaries = {
        Drama:
            "You're drawn to raw emotion and powerful storytelling. You value depth, vulnerability, and performances that leave you thinking for days.",
        Action:
            "You love adrenaline-pumping spectacles and larger-than-life heroes. Intensity and physicality speak to your soul.",
        Comedy:
            "You appreciate wit, charm, and the magic of laughter. Life's too short not to enjoy a brilliant comedic performance.",
        "Sci-Fi":
            "You're a visionary — fascinated by the unknown, drawn to futuristic worlds and mind-bending concepts.",
        Thriller:
            "You crave suspense and unpredictability. You love being kept on the edge of your seat, guessing what comes next.",
        Biopic:
            "You're inspired by real stories and the human spirit. True tales of triumph and struggle resonate deeply with you.",
        Romance:
            "You're a hopeless romantic at heart. Love stories and emotional connections are what make cinema magical for you.",
        Fantasy:
            "You love escapism and wonder. Magical worlds, epic quests, and larger-than-life mythology captivate your imagination.",
        Musical:
            "Rhythm, melody, and performance move you. You believe music and cinema together create the ultimate art form.",
        Period:
            "You appreciate elegance, history, and the beauty of bygone eras. Rich costumes and nuanced performances captivate you.",
        Historical:
            "You're drawn to stories rooted in truth. The weight of history and its heroes speak powerfully to you.",
        Mystery:
            "You love unraveling puzzles. Clever plots and unexpected revelations keep your mind engaged and delighted.",
        Narration:
            "You appreciate the power of a great voice and storytelling craft. Atmosphere and wisdom draw you in.",
    };

    const taste = summaries[primary] || summaries["Drama"];

    return `Your choice of **${winner.name}** reveals a lot about you! ${taste}`;
}

export default function ResultScreen({ winner, eliminated, onRestart }) {
    const summary = useMemo(
        () => generateSummary(winner, eliminated),
        [winner, eliminated]
    );

    return (
        <div className="result-screen" id="result-screen">
            <div className="result-screen__card">
                <div className="result-screen__trophy">👑</div>
                <h1 className="result-screen__heading">Your Ultimate Favorite Actor</h1>
                <div className="result-screen__winner">
                    <div className="result-screen__image-wrapper">
                        <img
                            src={winner.image}
                            alt={winner.name}
                            className="result-screen__image"
                        />
                        <div className="result-screen__shine" />
                    </div>
                    <h2 className="result-screen__name">{winner.name}</h2>
                    <p className="result-screen__tagline">{winner.tagline}</p>
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
