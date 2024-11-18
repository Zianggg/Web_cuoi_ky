import React from "react";
import "./BookPage.css"

function BookPage() {
    return (<>
    <div className="BookPageWrapper">
        <div className="BookPageCover"></div>
        <div>
            <h3>Tên sách</h3>
            <p>Tác giả: </p>
            <p>Thể loại: </p>
            <p>Giới thiệu:
                <p className="description"></p>
            </p>
            <button className="BookPageButton">Mượn sách</button>
        </div>
        
    </div>
    </> );
}

export default BookPage;