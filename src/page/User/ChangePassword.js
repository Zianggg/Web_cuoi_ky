import React from "react";

const ChangePassword = () => {
  return (
    <div className="form-container">
      <h1>Đổi Mật Khẩu</h1>
      <form>
                    <div class="form-group">
                        <label for="username">Mật khẩu cũ:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Nhập mật khẩu cũ" 
                            required 
                        />
                    </div>
                    <div class="form-group">
                        <label for="contact">Mật khẩu mới:</label>
                        <input 
                            type="text" 
                            id="contact" 
                            name="contactInfo" 
                            placeholder="Mật khẩu mới" 
                            required 
                        />
                    </div>
                    <div class="form-group">
                        <label for="contact">Nhập lại mật khẩu mới:</label>
                        <input 
                            type="text" 
                            id="contact" 
                            name="contactInfo" 
                            placeholder="Mật khẩu mới" 
                            required 
                        />
                    </div>
                    
                    <button type="submit" class="save-button">Đổi mật khẩu</button>
                </form>
    </div>
  );
};

export default ChangePassword;
