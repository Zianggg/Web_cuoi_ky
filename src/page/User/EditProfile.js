import React, { useState, useEffect } from "react";



const EditProfile = () => {
    
    return (
        <>
            <div class="form-container">
                <h1>Sửa hồ sơ</h1>
                <form>
                    <div class="form-group">
                        <label for="username">Tên người dùng:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Nhập tên người dùng" 
                            required 
                        />
                    </div>
                    <div class="form-group">
                        <label for="contact">Địa chỉ liên lạc:</label>
                        <input 
                            type="text" 
                            id="contact" 
                            name="contactInfo" 
                            placeholder="Nhập địa chỉ liên lạc" 
                            required 
                        />
                    </div>
                    <div class="form-group">
                        <label for="contact">Số điện thoại:</label>
                        <input 
                            type="text" 
                            id="contact" 
                            name="contactInfo" 
                            placeholder="Nhập số điện thoại liên lạc" 
                            required 
                        />
                    </div>
                    
                    <button type="submit" class="save-button">Lưu hồ sơ</button>
                </form>
            </div>
    </>
    );
};

export default EditProfile;