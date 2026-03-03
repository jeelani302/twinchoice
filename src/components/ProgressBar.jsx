import React from "react";

export default function ProgressBar({ remaining, total, label = "actor" }) {
    const progress = ((total - remaining) / (total - 1)) * 100;
    return (
        <div className="progress-bar" id="progress-bar">
            <div className="progress-bar__track">
                <div
                    className="progress-bar__fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className="progress-bar__label">
                <span className="progress-bar__count">{remaining}</span> {label}{remaining !== 1 ? "s" : ""} remaining
            </p>
        </div>
    );
}
