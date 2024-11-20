import React from "react";
import "./CategorgyCard.css";


function CategorgyCard({title}) {
    return ( 
        <>
        <div className="CategoryCardWrapper">
                <b>{title}</b>
        </div>
        </>
     );
}

export default CategorgyCard;