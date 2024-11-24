import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import SearchBar from "../../component/SearchBar/SearchBar";

function ManageCategory() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [editCategory, setEditCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState("");

    useEffect(() => {
        const mockData = [
            {
                id: 1,
                categoryName: "scifi",
            },
        ];
        setCategories(mockData);
    }, []);

    // Bắt đầu sửa danh mục
    const handleEdit = (category) => {
        setEditCategory(category);
        setNewCategoryName(category.categoryName);
    };

    // Lưu thay đổi danh mục
    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:8080/api/categories/${editCategory.id}`, {
                categoryName: newCategoryName,
            });
            setCategories(
                categories.map((category) =>
                    category.id === editCategory.id ? { ...category, categoryName: newCategoryName } : category
                )
            );
            setEditCategory(null);
            alert("Danh mục đã được cập nhật thành công.");
        } catch (err) {
            console.error("Lỗi khi cập nhật danh mục:", err);
            alert("Không thể cập nhật danh mục. Vui lòng thử lại.");
        }
    };

    // Hủy sửa
    const handleCancel = () => {
        setEditCategory(null);
        setNewCategoryName("");
    };

    return (
        <div className="borrow-history">
            <div className="Borrow-history-header">
                <h1>Danh sách danh mục</h1>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <SearchBar items={categories}></SearchBar>
                </div>
            </div>
            <div className="borrow-list">
                {error ? (
                    <p className="error-message">{error}</p>
                ) : categories.length === 0 ? (
                    <p className="empty-history">Không có danh mục.</p>
                ) : (
                    categories.map((category) => (
                        <div key={category.id} className="borrow-item">
                            {editCategory && editCategory.id === category.id ? (
                                <div className="edit-form">
                                    <input
                                        type="text"
                                        value={newCategoryName}
                                        onChange={(e) => setNewCategoryName(e.target.value)}
                                        className="edit-input"
                                    />
                                    <div className="edit-buttons">
                                        <button className="AcceptButton" onClick={handleSave}>
                                            Lưu
                                        </button>
                                        <button className="CancelButton" onClick={handleCancel}>
                                            Hủy
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="borrow-details">
                                        <h2>
                                            {category.id}. {category.categoryName}
                                        </h2>
                                    </div>
                                    <button className="UpdateButton" onClick={() => handleEdit(category)}>
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ManageCategory;