import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./UserDashBoard.css"

const UserDashboard = () => {
  return (
<>
    <div className="profile-settings">
      <div className="sidebar">
        <div className="user-info">
          <div className="avatar"></div>
            <p>Tên người dùng</p>
                <p className="user-id">ID bạn đọc</p>
              </div>
                <div className="menu">
                  <Link to="profile-edit" className="UserProfileLink">Sửa Hồ Sơ</Link>
                  <Link to="borrow-history" className="UserProfileLink">Lịch Sử Mượn Sách</Link>
                  <Link to="change-password" className="UserProfileLink">Đổi Mật Khẩu</Link>
                  <Link to="report-lost-book" className="UserProfileLink">Report Mất Sách</Link>
                </div>
      </div>
      <Outlet/>
    </div>

</>);
};

export default UserDashboard;
