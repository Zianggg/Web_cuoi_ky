import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import { faBook, faUsers,faTags  ,faSync,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./AdminSideBar.css";



function AdminSidebar() {

    return ( 
        <>
        <div className="AdminWrapper">
            <div className="AdminSidebar">
                <div className="AdminMenu">
                    <img src='https://i.imgur.com/KnZDTAE.png' alt='https://i.imgur.com/KnZDTAE.png'></img> {/*Thêm link ảnh */}
                        <Link to={"manage-books"} className="AdminLinks"><FontAwesomeIcon icon={faBook}/> Kho sách</Link>
                        <Link to={"manage-borrow-and-returned-books"} className="AdminLinks"><FontAwesomeIcon icon={faSync} /> Đơn mượn sách</Link> {/*sửa tên link*/}
                        <Link to={"manage-users"} className="AdminLinks"><FontAwesomeIcon icon={faUsers}/> Danh sách người dùng</Link>
                        <Link to={"manage-category"} className="AdminLinks"><FontAwesomeIcon icon={faTags} /> Danh sách danh mục</Link>
                        <button className="AdminLinks"><FontAwesomeIcon icon={faSignOutAlt}/> Đăng xuất</button>
                </div>
            </div>
        <Outlet></Outlet>
        </div>
        </>
     );
}

export default AdminSidebar;