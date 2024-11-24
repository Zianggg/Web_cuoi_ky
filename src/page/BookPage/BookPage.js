import React from "react";
import "./BookPage.css"
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import CategorgyCard from "../../component/CategoryCard/CategoryCard";

function BookPage({id, title, description, authors,publisher, pubshedYear, file}) {
    return (<>
     <NavBar />
            <div className="BookPageWrapper">
                <div className="BookpageContainer1">
                    <div className="BookPageCover"><img src={file}/></div>
                    <div >
                    
                        <div className="BookPageInformations">
                        
                            <h1>name</h1>
                            <p>Tác giả: {authors}</p>
                            <p>Nhà xuất bản: {publisher || "Không có thông tin"}</p>
                            <p>Năm xuất bản: {pubshedYear || "Không có thông tin"}</p>
                            <p>Thể loại: </p>
                            <p>Mã sách: {id}</p>
                        </div>
                        <div>
                            <button className="BookPageButton">
                                Mượn sách
                            </button>
                        </div>
                        {/*thêm className, hr*/}
                        <hr></hr>
                        <div className="description-container">
                            <b>Mô tả:</b>
                            <p>{"A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It’s 1956 in Gilead, Iowa, towards the end of the Reverend Ames’s life, and he is absorbed in recording his family’s story, a legacy for the young son he will never see grow up. Haunted by his grandfather’s presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend’s lost son who returns to Gilead searching for forgiveness and redemption. Told in John Ames’s joyous, rambling voice that finds beauty, humour and truth in the smallest of life’s details, Gilead is a song of celebration and acceptance of the best and the worst the world has to offer. At its heart is a tale of the sacred bonds between fathers and sons, pitch-perfect in style and story, set to dazzle critics and readers alike.	" || "Không có thông tin"}</p>
                        </div>
                        </div>
                </div>   
            </div>
            
            <Footer />
    </> );
}

export default BookPage;