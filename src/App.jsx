import React, { useState, useCallback } from "react";
import actorsData from "./data/actors";
import indianActorsData from "./data/indian_actors";
import moviesData from "./data/movies";
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

function initGame(category, subCategory = null) {
    let data;
    if (category === "movies") {
        data = moviesData;
    } else if (category === "actors") {
        data = subCategory === "indian" ? indianActorsData : actorsData;
    }

    const shuffled = shuffle(data);
    return {
        champion: shuffled[0],
        challenger: shuffled[1],
        remaining: shuffled.slice(2),
        eliminated: [],
        gameOver: false,
        round: 0,
        started: true,
        category: category,
        subCategory: subCategory,
        totalItems: data.length
    };
}

export default function App() {
    const [state, setState] = useState({
        started: false,
        category: null,
        subCategory: null,
        showActorSub: false
    });

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

    const startGame = useCallback((category, subCategory = null) => {
        setState({ ...initGame(category, subCategory), showActorSub: false });
    }, []);

    const handleRestart = useCallback(() => {
        setState({ started: false, category: null, subCategory: null, showActorSub: false });
    }, []);

    const remainingItems = state.started ? state.remaining.length + (state.gameOver ? 0 : 2) : 0;

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
                    <span className="app__logo-twin">TwinChoice</span>
                    <span className="app__logo-choice"> - Showdown</span>
                </h1>
                <p className="app__subtitle">Pick your ultimate choice in a head-to-head elimination game</p>
            </header>

            <main className="app__main">
                {!state.started && (
                    <div className="category-select">
                        <h2 className="category-select__heading">
                            {!state.showActorSub ? "Choose a Category" : "Choose Actor Origin"}
                        </h2>
                        <div className="category-select__buttons">
                            {!state.showActorSub ? (
                                <>
                                    <button
                                        className="category-select__btn"
                                        onClick={() => setState(s => ({ ...s, showActorSub: true }))}
                                    >
                                        🎬 Actors
                                    </button>
                                    <button
                                        className="category-select__btn"
                                        onClick={() => startGame('movies')}
                                    >
                                        🍿 Movies
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="category-select__btn"
                                        onClick={() => startGame('actors', 'foreign')}
                                    >
                                        🌍 Foreign Actors
                                    </button>
                                    <button
                                        className="category-select__btn"
                                        onClick={() => startGame('actors', 'indian')}
                                    >
                                        🇮🇳 Indian Actors
                                    </button>
                                    <button
                                        className="category-select__btn category-select__btn--back"
                                        onClick={() => setState(s => ({ ...s, showActorSub: false }))}
                                    >
                                        ⬅️ Back
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {state.started && !state.gameOver && (
                    <>
                        <ProgressBar
                            remaining={remainingItems}
                            total={state.totalItems}
                            label={state.category === "movies" ? "movie" : (state.subCategory === "indian" ? "Indian actor" : "Foreign actor")}
                        />
                        <GameScreen
                            champion={state.champion}
                            challenger={state.challenger}
                            onChoose={handleChoose}
                            roundKey={state.round}
                        />
                    </>
                )}

                {state.started && state.gameOver && (
                    <ResultScreen
                        winner={state.champion}
                        eliminated={state.eliminated}
                        onRestart={handleRestart}
                        section={state.category}
                    />
                )}
            </main>

            <footer className="app__footer">
                <p>Made with ❤️ &mdash; TwinChoice</p>
            </footer>
        </div>
    );
}
