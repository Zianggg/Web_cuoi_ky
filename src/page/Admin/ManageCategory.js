import { useEffect, useState } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function ManageCategory() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const mockData = [
            {
                id: 1,
                categoryName: "scifi",
            },
        ];
        setCategory(mockData);
    }, []);

    return (<>
    
    <div className="borrow-history">
        <div className="Borrow-history-header">
            <h1>Danh sách danh mục</h1>
            <div style={{display:"flex", alignItems:"center", gap:'10px'}}>
                <SearchBar></SearchBar>
                <button className="CreateButton"><FontAwesomeIcon icon={faPlus}/></button>
            </div>
        </div>
                    <div className="borrow-list">
                        {category.length === 0 ? (
                            <p className="empty-history">Không có danh mục.</p>
                        ) : (
                            category.map((category) => (
                                <div key={category.id} className="borrow-item">
                                    <div className="borrow-details">
                                        <h2>{category.categoryName}</h2>
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

export default ManageCategory;