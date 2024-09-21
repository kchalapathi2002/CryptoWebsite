import React from 'react';
import './eachCoin.css'

const EachCoin = ({ at }) => {
    return (
        <div className="coin-row">
            <p>
                <div className="coin-data">
                    <img src={at.image} alt="" width="35" height="35"></img>
                    <p>{at.name}</p>
                </div>
            </p>
            <p>{at.id.toUpperCase()}</p>
            <p className="coin-price">${at.price}</p>
            <p className={at.percentChange1h > 0 ? "positive" : "negative"}>
                {Math.floor(at.percentChange1h * 100) / 100}%
            </p>
            <p className={at.percentChange24h > 0 ? "positive" : "negative"}>
                {Math.floor(at.percentChange24h * 100) / 100}%
            </p>
            <p>{at.marketcap}</p>

        </div>
    );
};

export default EachCoin;