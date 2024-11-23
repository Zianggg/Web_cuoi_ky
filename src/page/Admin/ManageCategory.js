import { useEffect, useState } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../component/Modal/Modal";

function ManageCategory() {
    const [category, setCategory] = useState([]);
    const [newCategory, setNewCategory] = useState("")
    const [visibleForm, setVisibleForm] = useState(false)
    const [newCategoryId, setNewCategoryId] = useState()

    useEffect(() => {
        const mockData = [
            {
                id: 1,
                categoryName: "scifi",
            },
        ];
        setCategory(mockData);
    }, []);

    const changeCategoryName = (id) => {
        const newCategoryName = category.map(item =>
          item.id === id ? { ...item,  categoryName: newCategory} : item
        );
        setCategory(newCategoryName);
        console.log(newCategoryName)
      };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        changeCategoryName(newCategoryId);
        setNewCategory('')
        setVisibleForm(false)
    }
    

    return (<>
    <Modal  onClose={() => setVisibleForm(false)}
            isOpen={visibleForm}
    >   <h3>Sửa danh mục</h3>
        <form onSubmit={handleSubmit}>
            <div className="admin-form-container">

                <input
                    required
                    type="text" 
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                ></input>
                <button type="submit" className="admin-button-form">Cập nhật</button>
            </div>
            
        </form>
    </Modal>
    
    <div className="borrow-history">
        <div className="Borrow-history-header">
            <h1>Danh sách danh mục</h1>
            <div style={{display:"flex", alignItems:"center", gap:'10px'}}>
                <SearchBar></SearchBar>
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
                                    <button className="UpdateButton" onClick={()=> (setVisibleForm(true),
                                                                                    setNewCategoryId(category.id),
                                                                                    console.log(newCategoryId)
                                )
                                    }><FontAwesomeIcon icon={faPen} onClick={()=>setVisibleForm(true)}/></button>
                                {/*thêm function cho button*/}
                                </div>
                            ))
                        )}
                    </div>
                </div>
    </> );
}

export default ManageCategory;