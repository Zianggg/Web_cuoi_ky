import React, { useState } from "react";
import "./BookCard.css"



function BookCard({id, file, title, author, onClick}){
    const [isHover, setIsHover] = useState(false)

    return (
        <>
        <div key={id} className="BookWrapper" 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}>
            <div className="BookCover"><img src={file}/></div>
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