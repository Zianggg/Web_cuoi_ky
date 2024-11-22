import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EditProfilePage.css";
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

const EditProfilePage = () => {
    const [formData, setFormData] = useState({
        username: "",
        contactInfo: "",
    });
    const navigate = useNavigate();
    const userId = localStorage.getItem("readerId"); // Lấy ID người dùng từ localStorage

    useEffect(() => {
        // Gọi API để lấy thông tin người dùng theo ID
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/readers/${userId}`);
                const { username, contactInfo } = response.data;
                setFormData({ username, contactInfo });
            } catch (error) {
                console.error("Lỗi khi lấy thông tin người dùng:", error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    // Xử lý khi người dùng thay đổi dữ liệu trong form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Xử lý khi người dùng nhấn nút "Lưu"
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/readers/${userId}`, {
                username: formData.username,
                contactInfo: formData.contactInfo,
            });

            alert("Cập nhật thông tin thành công!");
            navigate("/user"); // Chuyển hướng về trang người dùng
        } catch (error) {
            console.error("Lỗi khi cập nhật thông tin người dùng:", error);
            alert("Cập nhật thông tin thất bại. Vui lòng thử lại sau.");
        }
    };

    return (
        <>
        <NavBar />
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
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="username">Tên người dùng:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Nhập tên người dùng" 
                            value={formData.username} 
                            onChange={handleChange} 
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
                            value={formData.contactInfo} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" class="save-button">Lưu hồ sơ</button>
                </form>
            </div>
        </div>
        <Footer />
    </>
    );
};

export default EditProfilePage;