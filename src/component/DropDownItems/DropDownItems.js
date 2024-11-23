import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./DropDown.css";

function DropDownMenu() {
    return (
        <>
            <ul className="dropDownMenu">
                <li>
                    <div className="menuItems" onClick={{}}>
                        <div className="NavBarProfile">
                            <img src="https://i.imgur.com/B8ta5Aa.jpeg" alt="Profile" />
                            <h3>Tài khoản</h3>
                        </div>
                    </div>
                    <hr />
                </li>
                <li className="menuItems">
                    <a to="/category" className="menuItems">Thể loại</a>
                </li>
                <hr />
                <li className="menuItems" onClick={{}}>
                    <a to="/edit" className="menuItems">Sửa hồ sơ</a>
                </li>
                <li className="menuItems" onClick={{}}>
                    <a to="/Borrow-history" className="menuItems">Lịch sử mượn</a>
                </li>
                <li className="menuItems" onClick={{}}>
                    <a to="/Change-password" className="menuItems">Đổi mật khẩu</a>
                </li>
                <li className="menuItems" onClick={{}}>
                    <a to="/Report-ticket" className="menuItems">Report mất sách</a>
                </li>
                {/* Nút Đăng Xuất hiển thị nếu người dùng đã đăng nhập */}
                    <>
                        <hr />
                        <li>
                            <button className="logoutButton" onClick={{}}>
                                Đăng xuất
                            </button>
                            {/*xóa className của li button đăng xuất*/}
                        </li>
                    </>
   
                    <>
                        <hr />
                        <li className="menuItems">
                            <a to="/admin" className="menuItems">Về trang Admin</a>
                        </li>
                    </>
            </ul>
        </>
    );
}

export default DropDownMenu;