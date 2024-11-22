import React from "react";
import "./BookPage.css"
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";

function BookPage({id, title, description, authors,publisher, pubshedYear, file}) {
    return (<>
     <NavBar />
            <div className="BookPageWrapper">
                <div className="BookpageContainer1">
                    <div className="BookPageCover"><img src={file}/></div>
                    <div >
                        <div className="BookPageInformations">
                            <h2>Tên sách: {title}</h2>
                            <p>Tác giả: {authors}</p>
                            <p>Nhà xuất bản: {publisher || "Không có thông tin"}</p>
                            <p>Năm xuất bản: {pubshedYear || "Không có thông tin"}</p>
                            <p>Thể loại:</p>
                            <p>Mã sách: {id}</p>
                        </div>
                        <button className="BookPageButton">
                            Mượn sách
                        </button>
                        <div>
                            <b>Mô tả:</b>
                            <p>{description || "Không có thông tin"}</p>
                        </div>
                        </div>
                </div>   
            </div>
            
            <Footer />
    </> );
}

export default BookPage;