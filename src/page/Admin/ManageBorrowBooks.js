import { useEffect, useState } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ManageBorrowBooks = () => {
  const [borrowBooks, setBorrowBooks] = useState([]);
  const [borrowStatusStyle, setBorrowStatusStyle] = useState('pending')
    //state chuyển style

  useEffect(() => {
      const mockData = [
          {
              id: 1,
              bookTitle: "Đắc Nhân Tâm",
              bookCover: "https://via.placeholder.com/50", // URL ảnh bìa sách
              borrowDate: "01/01/2023",
              returnDate: "15/01/2023",
              name:"Tên bạn đọc",
              status: "DANG_DUYET", //thêm status để test.
          },
      ];
      setBorrowBooks(mockData);
  }, []);

  console.log(borrowBooks)


  const acceptToBorrow = (id) => {
    const updatedTicket = borrowBooks.map(item =>
      item.id === id ? { ...item, status: "DANG_MUON" } : item
    );
    setBorrowBooks(updatedTicket);
    console.log(updatedTicket)
  };

  {/*thêm function accept*/}



    return (<>
  <div className="borrow-history">
        <div className="Borrow-history-header">
            <h1>Đơn mượn sách</h1> {/*sửa tiêu đề sách*/}
            <div style={{display:"flex", alignItems:"center", gap:'10px'}}> {/*xóa nút tạo mới đơn*/}
                <SearchBar items={borrowBooks}></SearchBar>
            </div>
        </div>
                    <div className="borrow-list">
                        {borrowBooks.length === 0 ? (
                            <p className="empty-history">Không có lịch sử mượn sách nào.</p>
                        ) : (
                            borrowBooks.map((borrow) => (
                                <div key={borrow.id} className={borrowStatusStyle}> {/*đổi style thành state*/}
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
                                    {borrow.status==="DANG_MUON"? <p className="borrowStatus">Đang mượn</p> : <button className="AcceptButton" onClick={() =>{acceptToBorrow(borrow.id);
                                                                                                                                                              setBorrowStatusStyle('borrowing')}
                                                                                                                                                                                                       
                                    }>Duyệt mượn sách</button>}
                                    <button className="DeleteButton"><FontAwesomeIcon icon={faTrash}/></button>
                                </div>
                            ))
                        )}
                    </div>
                </div>


    </>);
  };
  
  export default ManageBorrowBooks;
  