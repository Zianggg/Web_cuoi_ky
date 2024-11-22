import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./BookPage.css";

function BookPage() {
    const { id } = useParams(); // Lấy `id` từ URL
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Gọi API để lấy thông tin sách
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/books/${id}`);
                if (!response.ok) {
                    throw new Error("Không tìm thấy sách");
                }
                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error("Lỗi khi tải chi tiết sách:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);

    // Hàm xử lý khi nhấn vào nút "Mượn sách"
    const handleBorrowClick = () => {
        const token = localStorage.getItem("token");

        if (token) {
            // Người dùng đã đăng nhập
            navigate("/borrow-ticket", { state: { book } });
        } else {
            // Người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
            alert("Vui lòng đăng nhập để mượn sách.");
            navigate("/login");
        }
    };

    if (isLoading) {
        return (
            <>
                <NavBar />
                <div className="BookPageContainer">
                    <p>Đang tải thông tin sách...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (!book) {
        return (
            <>
                <NavBar />
                <div className="BookPageContainer">
                    <p>Không tìm thấy sách.</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <NavBar />
            <div className="BookPageWrapper">
                <div className="BookPageCover">
                    <img src={book.file} alt=""/>
                </div>
                <div>
                    <div>
                        <h2>Tên sách: {book.title}</h2>
                        <p>Mô tả: {book.description || "Không có thông tin"}</p>
                        <p>Tác giả: {book.authors.map((author) => author.name).join(", ")}</p>
                        <p>Nhà xuất bản: {book.publisher || "Không có thông tin"}</p>
                        <p>Năm xuất bản: {book.pubshedYear || "Không có thông tin"}</p>
                        <p>Thể loại: {book.categories.length > 0 ? book.categories.map((category) => category.categoryName).join(", ") : "Không có thông tin"}</p>
                        <p>Mã sách: {book.id}</p>
                    </div>
                    <button className="BookPageButton" onClick={handleBorrowClick}>
                        Mượn sách
                    </button>
                </div>
            </div>
            
            <hr style={{margin:"0 7rem 0 7rem"}}></hr>
            <div className="BookPageWrapperDescription">
                <b>Mô tả</b>
                <p>{book.description || "Không có thông tin"}</p>
            </div>

            <Footer />
        </>
    );
}

export default BookPage;