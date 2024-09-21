import React from "react";
import './LatestFinalizedBlock.css'

const LastFinalizedBlock = (value) => {
    return (
        <div className="block">
            <p>Last Finalized Block(Ethereum)</p>
            <p className="blockvalue">{value.value}</p>
        </div>
    );
};

export default LastFinalizedBlock;