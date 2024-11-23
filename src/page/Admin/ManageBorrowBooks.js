import { useEffect, useState } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageBorrowBooks = () => {
  const [borrowBooks, setBorrowBooks] = useState([]);

  useEffect(() => {
      const mockData = [
          {
              id: 1,
              bookTitle: "Đắc Nhân Tâm",
              bookCover: "https://via.placeholder.com/50", // URL ảnh bìa sách
              borrowDate: "01/01/2023",
              returnDate: "15/01/2023",
              name:"Tên bạn đọc"
          },
      ];
      setBorrowBooks(mockData);
  }, []);
    return (<>
  <div className="borrow-history">
        <div className="Borrow-history-header">
            <h1>Sách đang được mượn</h1>
            <div style={{display:"flex", alignItems:"center", gap:'10px'}}>
                <SearchBar></SearchBar>
                <button className="CreateButton"><FontAwesomeIcon icon={faPlus}/></button>
            </div>
        </div>
                    <div className="borrow-list">
                        {borrowBooks.length === 0 ? (
                            <p className="empty-history">Không có lịch sử mượn sách nào.</p>
                        ) : (
                            borrowBooks.map((borrow) => (
                                <div key={borrow.id} className="borrow-item">
                                    <img
                                        src={borrow.bookCover}
                                        alt={`Bìa sách: ${borrow.bookTitle}`}
                                        className="book-cover"
                                    />
                                    <div className="borrow-details">
                                        <h3 className="book-title">{borrow.bookTitle}</h3>
                                        <p>Ngày mượn: {borrow.borrowDate}</p>
                                        <p>Ngày trả dự kiến: {borrow.returnDate}</p>
                                        <p>Người mượn: {borrow.name} (id: {1})</p>
                                    </div>
                                    
                                    <button className="UpdateButton"><FontAwesomeIcon icon={faPen}/></button>
                                    <button className="DeleteButton"><FontAwesomeIcon icon={faTrash}/></button>
                                </div>
                            ))
                        )}
                    </div>
                </div>


    </>);
  };
  
  export default ManageBorrowBooks;
  