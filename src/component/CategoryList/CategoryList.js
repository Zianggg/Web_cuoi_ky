import React from "react";
import "./CategoryList.css"
import { useState } from "react";
import CategorgyCard from "../CategoryCard/CategoryCard";

const categories = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Tên Sách ${index + 1}`,
    author: `Tên Tác Giả ${index + 1}`,
  }));

function CategoryList() {
    const [currentPage, setCurrentPage] = useState(1);
    const categoriesPerPage = 30; // Số sách tối đa trên 1 trang

    // Tính toán sách hiển thị trên trang hiện tại
    const totalPages = Math.ceil(categories.length / categoriesPerPage); // Tổng số trang
    const startIndex = (currentPage - 1) * categoriesPerPage;
    const endIndex = startIndex + categoriesPerPage;
    const currentCategories = categories.slice(startIndex, Math.min(endIndex, categories.length));

    // Xử lý khi nhấn nút chuyển trang
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };

    return (<>
        <div className="categories-list">
            <h2>Categories</h2>
            <hr />
        <div className="categories-list-content">
            <ul>
                {currentCategories.map((category) => (
                    <CategorgyCard
                        key={category.id}
                        id={category.id}
                        title={category.title}/>
                ))}
            </ul>
        </div>
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
        
    </>);
}

export default CategoryList;