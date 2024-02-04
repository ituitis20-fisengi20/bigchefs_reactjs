import React from "react";
import "./card.css";

const Card = ({ title, number }) => {
    return (
        <div className="cardContainer">
            <div className="texts">
                <span className="title">{title}</span>
                <span className="number">{number}</span>
            </div>
        </div>
    );
};

export default Card;
