import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EditProfilePage.css";

const EditProfilePage = () => {
    return (
        <>
        <div class="profile-settings">
            <div class="sidebar">
                <div class="user-info">
                    <div class="avatar"></div>
                    <p>Tên người dùng</p>
                    <p class="user-id">ID bạn đọc</p>
                </div>
                <ul class="menu">
                    <li class="active">Sửa hồ sơ</li>
                    <li>Lịch sử mượn sách</li>
                    <li>Đổi mật khẩu</li>
                    <li>Report mất sách</li>
                </ul>
            </div>

            <div class="form-container">
                <h1>Sửa hồ sơ</h1>
                <form onSubmit={{}}>
                    <div class="form-group">
                        <label for="username">Tên người dùng:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Nhập tên người dùng" 
                            value={{}} 
                            onChange={{}} 
                            required 
                        />
                    </div>
                    <div class="form-group">
                        <label for="contact">Thông tin liên lạc:</label>
                        <input 
                            type="text" 
                            id="contact" 
                            name="contactInfo" 
                            placeholder="Nhập thông tin liên lạc" 
                            value={{}} 
                            onChange={{}} 
                            required 
                        />
                    </div>
                    <button type="submit" class="save-button">Lưu hồ sơ</button>
                </form>
            </div>
        </div>
    </>
    );
};

export default EditProfilePage;