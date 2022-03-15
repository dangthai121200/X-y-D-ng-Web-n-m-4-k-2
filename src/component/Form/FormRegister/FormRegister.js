import React from 'react';
import { Link } from 'react-router-dom';
import image from "./signup-image.jpg";


const FormRegister = () => {
  return (
    <div className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Đăng ký</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Họ tên"/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-account"></i></label>
                                <input type="email" name="email" id="email" placeholder="Tên đăng nhập"/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Mật Khẩu"/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Nhập lại mật khẩu"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" required/>
                                <label for="agree-term" className="label-agree-term"><span><span></span></span>Tôi đồng ý với chính sách bảo mật </label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Đăng ký"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={image} alt="sing up image" /></figure>
                        <Link to="/login" className="signup-image-link">Đã có tài khoản</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FormRegister