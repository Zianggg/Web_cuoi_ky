import React, { useState } from "react";
import "./BookCard.css"



function BookCard({id, title, author,}){
    const [isHover, setIsHover] = useState(false)

    return (
        <>
        <div key={id} className="BookWrapper" 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
            <div className="BookCover"></div>
                {isHover && (<>
                    <div className="BookCardContainer">
                        <b>{title}</b>
                        <p>{author}</p>
                    </div>
                </>)}
        </div>
        </>
    );
}

export default BookCard;