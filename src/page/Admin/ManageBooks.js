import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";

function ManageBooks() {
    const [Books, setBooks] = useState([]);

    useEffect(() => {
        const mockData = [
            {
                id: 1,
                bookTitle: "Đắc Nhân Tâm",
                inStock: 50,
                borrowing: 3,
                bookCover: "https://via.placeholder.com/50", // URL ảnh bìa sách
            },
        ];
        setBooks(mockData);
    }, []);

    return (<>
    
    <div className="borrow-history">
        <div className="Borrow-history-header">
            <h1>Kho sách</h1>
            <div style={{display:"flex", alignItems:"center", gap:'10px'}}>
                <SearchBar></SearchBar>
                <button className="CreateButton"><FontAwesomeIcon icon={faPlus}/></button>
            </div>
        </div>
                    <div className="borrow-list">
                        {Books.length === 0 ? (
                            <p className="empty-history">Không có lịch sử mượn sách nào.</p>
                        ) : (
                            Books.map((book) => (
                                <div key={book.id} className="borrow-item">
                                    <img
                                        src={book.bookCover}
                                        alt={`Bìa sách: ${book.bookTitle}`}
                                        className="book-cover"
                                    />
                                    <div className="borrow-details">
                                        <h3 className="book-title">{book.bookTitle}</h3>
                                        <p>Trong kho: {book.inStock}</p>
                                        <p>Đang được mượn: {book.borrowing}</p>
                                    </div>
                                    
                                    <button className="UpdateButton"><FontAwesomeIcon icon={faPen}/></button>
                                    <button className="DeleteButton"><FontAwesomeIcon icon={faTrash}/></button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
    </> );
}

export default ManageBooks;