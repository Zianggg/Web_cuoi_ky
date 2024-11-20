import React from "react";
import "./CategorgyCard.css";

function CategorgyCard({title}) {
    return ( 
        <>
        <div className="CategoryCardWrapper">
            <div>
                <b>{title}</b>
            </div>
        </div>
        </>
     );
}

export default CategorgyCard;