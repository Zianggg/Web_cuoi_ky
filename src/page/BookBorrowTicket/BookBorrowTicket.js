import React from "react";
import "./BookBorrowTicket.css"

function BorrowBookTicket() {
    return (<>
    <div className="BorrowBookTicketWrapper">
        <div>
            <h2>Đơn mượn sách</h2>
            <hr></hr>
        </div>
        <div style={{display:"flex", gap:"5rem", margin:"2rem",marginLeft:"5rem",marginRight:"5rem"}}>
            <div className="BookBorrowTicketCover"></div>
            <div>
                <h2>Tên sách: </h2>
                <p>Nhà xuất bản: </p>
                <p>Thể loại: </p>
                <p>Mã sách: </p>
                <p>Ngày mượn: </p>
                <p>Ngày trả dự kiến: </p>
            </div>
        </div>
        <hr></hr>
        <div style={{display:"flex", gap:"20rem", margin:"2rem",marginLeft:"5rem",marginRight:"5rem",}}>
            <div>
                <p>Tên người mượn:</p>
                <p>Địa chỉ:</p>
            </div>
            <div>
                <p>Id bạn đọc:</p>
                <p>Số điện thoại:</p>
            </div>
        </div>
        <hr></hr>
        <div style={{margin:"2rem",textAlign:"right"}}>
            <p style={{color:"grey", fontSize:"14px", lineHeight:"80%"}}>Vui lòng chỉ Nhấn “Mượn sách” khi đã chấp nhận quy định mượn sách.</p>
            <button className="BorrowBookButton">Mượn sách</button>
        </div>
    </div>
        


    </>);
}

export default BorrowBookTicket;