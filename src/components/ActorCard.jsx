import React from "react";

export default function ActorCard({ actor, onChoose, animationKey, side }) {
    return (
        <div
            className={`actor-card actor-card--${side}`}
            key={animationKey}
            onClick={() => onChoose(actor)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onChoose(actor);
            }}
            id={`actor-card-${side}`}
        >
            <div className="actor-card__image-wrapper">
                <img
                    src={actor.image}
                    alt={actor.name}
                    className="actor-card__image"
                    draggable={false}
                />
                <div className="actor-card__overlay" />
            </div>
            <div className="actor-card__info">
                <h2 className="actor-card__name">{actor.name}</h2>
            </div>
            <div className="actor-card__choose-hint">
                <span>Choose</span>
            </div>
        </div>
    );
}
