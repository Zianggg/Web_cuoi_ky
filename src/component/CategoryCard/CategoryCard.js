import React from "react";
import "./CategorgyCard.css";


function CategorgyCard({title,id}) {
    return ( 
        <>
        <div className="CategoryCardWrapper">
                <b>{id}. {title}</b>
        </div>
        </>
     );
}

export default CategorgyCard;