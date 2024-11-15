import React from "react";
import "./DropDown.css"
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'

function DropDownMenu() {
    const menuItems = [
        {
            id: 1,
            name:"Tài khoản",
            className: "menuItems",
            path: "./account",
        },
        {
            id: 2,
            name:"Thể loại",
            className: "menuItems",
            path: "./Catergory",
        },
        {
            id: 3,
            name:"Hãng sách",
            className: "menuItems",
            path: "./Publisher",
        },
        {
            id: 4,
            name:"Sách nổi bật",
            className: "menuItems",
            path: "./Top-picks"
        },
        {
            id: 5,
            name: "Sách mới cập nhật",
            className: "menuItems",
            path: "./New-books"
        },
        {
            id: 6,
            name: "Sửa hồ sơ",
            className: "menuItems",
            path: "./Profile"
        },
        {
            id: 7,
            name: "Lịch sử mượn",
            className:"menuItems",
            path: "./Borrow-history"
        },
        {
            id: 8,
            name: "Đổi mật khẩu",
            className:"menuItems",
            path: "./Change-password"
        },
        {
            id: 9,
            name: "Report mất sách",
            className:"menuItems",
            path: "./Report-ticket"
        }
    ]
    return (
        <>
        <ul className="dropDownMenu">
                {menuItems.map(menuItems => 
                    <li key={menuItems.id}  className={menuItems.className}><Link to = {menuItems.path} className={menuItems.className}>{menuItems.name}</Link></li>
                )}
        </ul>
        </>
      );
}

export default DropDownMenu;
