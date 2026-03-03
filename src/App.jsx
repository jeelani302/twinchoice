import React, { useState, useCallback, useMemo } from "react";
import actorsData from "./data/actors";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";
import ProgressBar from "./components/ProgressBar";

/* Fisher-Yates shuffle */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function initGame() {
    const shuffled = shuffle(actorsData);
    return {
        champion: shuffled[0],
        challenger: shuffled[1],
        remaining: shuffled.slice(2),
        eliminated: [],
        gameOver: false,
        round: 0,
    };
}

export default function App() {
    const [state, setState] = useState(initGame);

    const totalActors = actorsData.length;

    const handleChoose = useCallback((chosen) => {
        setState((prev) => {
            if (prev.gameOver) return prev;

            const loser =
                chosen.id === prev.champion.id ? prev.challenger : prev.champion;

            const newEliminated = [...prev.eliminated, { loser, round: prev.round }];

            if (prev.remaining.length === 0) {
                // Final round — game over
                return {
                    ...prev,
                    champion: chosen,
                    challenger: null,
                    eliminated: newEliminated,
                    gameOver: true,
                    round: prev.round + 1,
                };
            }

            // Pop next challenger
            const [nextChallenger, ...rest] = prev.remaining;
            return {
                ...prev,
                champion: chosen,
                challenger: nextChallenger,
                remaining: rest,
                eliminated: newEliminated,
                round: prev.round + 1,
            };
        });
    }, []);

    const handleRestart = useCallback(() => {
        setState(initGame());
    }, []);

    const remaining = state.remaining.length + (state.gameOver ? 0 : 2);

    return (
        <div className="app">
            {/* Ambient background blobs */}
            <div className="ambient-bg">
                <div className="blob blob--1" />
                <div className="blob blob--2" />
                <div className="blob blob--3" />
            </div>

            <header className="app__header" id="app-header">
                <h1 className="app__logo">
                    <span className="app__logo-twin">Twin</span>
                    <span className="app__logo-choice">Choice</span>
                </h1>
            </header>

            <main className="app__main">
                {!state.gameOver && (
                    <>
                        <ProgressBar remaining={remaining} total={totalActors} />
                        <GameScreen
                            champion={state.champion}
                            challenger={state.challenger}
                            onChoose={handleChoose}
                            roundKey={state.round}
                        />
                    </>
                )}

                {state.gameOver && (
                    <ResultScreen
                        winner={state.champion}
                        eliminated={state.eliminated}
                        onRestart={handleRestart}
                    />
                )}
            </main>

            <footer className="app__footer">
                <p>Made with ❤️ &mdash; TwinChoice</p>
            </footer>
        </div>
    );
}
