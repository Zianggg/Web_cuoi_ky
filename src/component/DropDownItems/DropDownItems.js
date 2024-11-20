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
                    <li><Link to = "./account" className="menuItems">
                        <div className="NavBarProfile">
                                <img src="https://i.imgur.com/B8ta5Aa.jpeg"></img>
                                <h3>Tài khoản</h3>  
                        </div>
                        </Link>
                        <hr></hr>
                    </li>
                    <li className="menuItems"><Link to = "./Catergory" className="menuItems">Thể loại</Link></li>
                    <li className="menuItems"><Link to = "./Publisher" className="menuItems">Hãng sách</Link></li>
                    <li className="menuItems"><Link to = "./New-books" className="menuItems">Sách mới cập nhật</Link></li>
                    <hr></hr>
                    <li className="menuItems"><Link to = "./Profile" className="menuItems">Sửa hồ sơ</Link></li>
                    <li className="menuItems"><Link to = "./Borrow-history" className="menuItems">Lịch sử mượn</Link></li>
                    <li className="menuItems"><Link to = "./Change-password" className="menuItems">Đổi mật khẩu</Link></li>
                    <li className="menuItems"><Link to = "./Report-ticket" className="menuItems">Report mất sách</Link></li>
        </ul>
        </>
      );
}

export default DropDownMenu;
