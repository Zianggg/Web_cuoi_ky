import React from "react";
import "./DropDown.css"
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'

function DropDownMenu() {
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
