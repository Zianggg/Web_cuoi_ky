import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import Modal from "../../component/Modal/Modal";
import AddForm from "../../component/Form/AddForm";



function ManageUsers() {
    const [visibleForm, setVisibleForm] = useState(false)
    const [formType,setFormType] = useState("user")
    const [users, setUsers] = useState([]);
    const [userData,setUserData] = useState([])

    useEffect(() => {
        const mockData = [
            {
                id: 1,
                userName: "Tên bạn đọc",
                avatar: "https://via.placeholder.com/50", // URL ảnh bìa sách
            },
        ];
        setUsers(mockData);
    }, []);

    const addUser = () =>{
        const newUser = { id: users.length + 1, ...userData,};
        setUsers((prevUsers) => [...prevUsers, newUser]);
        console.log("Users after add:", users);
    }


    return ( <>
    <Modal
        onClose={() => setVisibleForm(false)}
        isOpen={visibleForm}
    >
        <AddForm userData={userData} setUserData={setUserData} formType={formType} setVisibleForm={setVisibleForm} add={addUser}></AddForm>
    </Modal>

     <div className="borrow-history">
        <div className="Borrow-history-header">
            <h1>Danh sách người dùng</h1>
            <div style={{display:"flex", alignItems:"center"}}>
                <SearchBar></SearchBar>
                <button className="CreateButton" onClick={() => (setVisibleForm(true),
                                                                setFormType("user"))}
            ><FontAwesomeIcon icon={faPlus}/></button>
            </div>
        </div>
                    <div className="borrow-list">
                        {users.length === 0 ? (
                            <p className="empty-history">Không có bạn đọc nào.</p>
                        ) : (
                            users.map((Reader) => (
                                <div key={Reader.id} className="borrow-item">
                                    <img
                                        src={Reader.avatar}
                                        alt={`Bìa sách: ${Reader.avatar}`}
                                        className="book-cover"
                                    />
                                    <div className="borrow-details">
                                        <h3 className="book-title">{Reader.userName}</h3>
                                        <p>Id bạn đọc: {Reader.id}</p>
                                    </div>
                                    
                                    <button className="UpdateButton"><FontAwesomeIcon icon={faPen}/></button>
                                    <button className="DeleteButton"><FontAwesomeIcon icon={faTrash}/></button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
    
    </>
       );
}

export default ManageUsers;