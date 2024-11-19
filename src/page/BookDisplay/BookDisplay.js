import React, { useState } from "react";
import BookCard from "../../component/BookCard/BookCard";
import "./BookDisplay.css";

// Danh sách các sách (đủ dài để test phân trang)
const books = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  title: `Tên Sách ${index + 1}`,
  author: `Tên Tác Giả ${index + 1}`,
}));

const BookDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 28; // Số sách tối đa trên 1 trang

  // Tính toán sách hiển thị trên trang hiện tại
  const totalPages = Math.ceil(books.length / booksPerPage); // Tổng số trang
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = books.slice(startIndex, Math.min(endIndex, books.length));

  // Xử lý khi nhấn nút chuyển trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="book-container">
      <h1>Sách nổi bật</h1>
      <hr></hr>
      <div className="book-grid">
        {currentBooks.map((book) => (
          <BookCard key={book.id} id={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      {/* Phân trang */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookDisplay;