import React from "react";
import ActorCard from "./ActorCard";

export default function GameScreen({
    champion,
    challenger,
    onChoose,
    roundKey,
}) {
    return (
        <div className="game-screen" id="game-screen">
            <div className="game-screen__cards">
                <ActorCard
                    actor={champion}
                    onChoose={onChoose}
                    animationKey={`champion-${roundKey}`}
                    side="left"
                />

                <div className="game-screen__vs">
                    <span className="vs-text">VS</span>
                    <div className="vs-glow" />
                </div>

                <ActorCard
                    actor={challenger}
                    onChoose={onChoose}
                    animationKey={`challenger-${roundKey}`}
                    side="right"
                />
            </div>
        </div>
    );
}
