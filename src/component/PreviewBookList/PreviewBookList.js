import React from "react";
import "./PreviewBookList.css"
import BookCard from "../BookCard/BookCard";

function PreviewBookList({title,}) {
    const Book = [{id: 1, title: "chuyen co tich", author: "dan gian"},
                {id:2, title: "toan roi rac", author: "Ly Quoc Su"},
                {id: 3, title: "chuyen tich", author: "dan gian"},
                {id: 4, title: "chuyen co th", author: "dan gian"},
                {id: 6, title: "chuyen co tich", author: "dan gian"},
                {id: 17, title: "chuyen co tich", author: "dan gian"},
                {id: 111, title: "chuyen co tich", author: "dan gian"},
                {id: 100, title: "chuyen co tich", author: "dan gian"},
            ]


    return ( 
    <>
    <div className="PreviewBookListWrapper">
        <h1>title</h1>
        <ul>
            {Book.filter(Book => Book.id < 10).slice(0,8).map(Book =>
                <BookCard key = {Book.id} title={Book.title} author={Book.author}></BookCard>
            )}
        </ul>
    </div>
    </>
    );
}

export default PreviewBookList;