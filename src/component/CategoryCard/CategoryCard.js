import React from "react";
import "./CategorgyCard.css";


function CategorgyCard({title}) {
    return ( 
        <>
        <div className="CategoryCardWrapper">
                <p>{title}</p>
        </div>
        </>
     );
}

export default CategorgyCard;