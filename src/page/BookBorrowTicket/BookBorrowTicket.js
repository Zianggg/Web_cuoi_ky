import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookBorrowTicket.css";

function BorrowBookTicket() {
    return (
        <>
            <div className="BorrowBookTicketWrapper">
                <div>
                    <h2>Đơn mượn sách</h2>
                    <hr />
                </div>
                <div style={{ display: "flex", gap: "5rem", margin: "2rem", marginLeft: "5rem", marginRight: "5rem" }}>
                    <div className="BookBorrowTicketCover"><img src={'http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api	'} alt="Book cover" /></div>
                    <div>
                        <h2>Tên sách: Gilead</h2>
                        <p>Mô tả: {"A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It’s 1956 in Gilead, Iowa, towards the end of the Reverend Ames’s life, and he is absorbed in recording his family’s story, a legacy for the young son he will never see grow up. Haunted by his grandfather’s presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend’s lost son who returns to Gilead searching for forgiveness and redemption. Told in John Ames’s joyous, rambling voice that finds beauty, humour and truth in the smallest of life’s details, Gilead is a song of celebration and acceptance of the best and the worst the world has to offer. At its heart is a tale of the sacred bonds between fathers and sons, pitch-perfect in style and story, set to dazzle critics and readers alike.	" || "Không có thông tin"}</p>
                        <p>Tác giả: Marilynne Robinson</p>
                        <p>Nhà xuất bản: {"Không có thông tin"}</p>
                        <p>Năm xuất bản: {"Không có thông tin"}</p>
                        <p>Thể loại: {"Không có thông tin"}</p>
                        <p>Mã sách: {1}</p>
                    </div>
                </div>
                <hr />
                <div style={{ display: "flex", gap: "20rem", margin: "2rem", marginLeft: "5rem", marginRight: "5rem" }}>
                    <div>
                        <p>Tên người mượn: {"Zianggg" || "Không có thông tin"}</p> {/* Lấy từ thông tin API */}
                        <p>Địa chỉ: {"tòa a golden palace mễ trì hà nội" || "Không có thông tin"}</p>
                        <p>Ngày mượn: {new Date(Date.now()).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p>Id bạn đọc: {1}</p> {/* ID bạn đọc lấy từ localStorage */}
                        <p>Số điện thoại: {"0764623705" || "Không có thông tin"}</p>
                        <p>Ngày trả dự kiến: {new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p> {/* Giả định thời gian trả là 14 ngày */}
                    </div>
                </div>
                <hr />
                <div style={{ margin: "2rem", textAlign: "right" }}>
                    <p style={{ color: "grey", fontSize: "14px", lineHeight: "80%" }}>Vui lòng chỉ Nhấn "Mượn sách" khi đã chấp nhận quy định mượn sách.</p>
                    <button className="BorrowBookButton">Mượn sách</button>
                </div>
            </div>
        </>
    );
}

export default BorrowBookTicket;