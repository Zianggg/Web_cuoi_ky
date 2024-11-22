import React, { useState, useEffect } from "react";

const BorrowHistory = () => {
    const [borrowHistory, setBorrowHistory] = useState([]);

    useEffect(() => {
        const mockData = [
            {
                id: 1,
                bookTitle: "Đắc Nhân Tâm",
                borrowDate: "01/01/2023",
                returnDate: "15/01/2023",
                bookCover: "https://via.placeholder.com/50", // URL ảnh bìa sách
            },
        ];
        setBorrowHistory(mockData);
    }, []);
    return (
        
        <>
                {/* Borrow History */}
                <div className="borrow-history">
                    <h1>Lịch sử mượn sách</h1>
                    <div className="borrow-list">
                        {borrowHistory.length === 0 ? (
                            <p className="empty-history">Không có lịch sử mượn sách nào.</p>
                        ) : (
                            borrowHistory.map((borrow) => (
                                <div key={borrow.id} className="borrow-item">
                                    <img
                                        src={borrow.bookCover}
                                        alt={`Bìa sách: ${borrow.bookTitle}`}
                                        className="book-cover"
                                    />
                                    <div className="borrow-details">
                                        <h3 className="book-title">{borrow.bookTitle}</h3>
                                        <p>Ngày mượn: {borrow.borrowDate}</p>
                                        <p>Ngày trả: {borrow.returnDate}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
        </>
    );
};

export default BorrowHistory;