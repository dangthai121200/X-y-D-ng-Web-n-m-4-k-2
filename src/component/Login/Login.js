import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

  return (
    <body >      
        <div class="container width-register">
          <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
              <div class="card card-signin flex-row my-5">

                <div class="card-body">
                  <h5 class="card-title text-center">Welcome to ATLAPTOP</h5>
                  <form class="form-signin" method="post" action="">
                    <div class="form-label-group">
                      <input name="username" classtype="email" id="inputEmail" class="form-control" placeholder="Email address" required />
                      <label for="inputEmail">Username or email:</label>
                    </div>
                    <br />
                    <div class="form-label-group">
                      <input name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                      <label for="inputPassword">Password</label>
                    </div>
                    <div class="form-label-group text-link-login">
                    <Link to="/resetpass">Forgot password?</Link>
                    </div>
                    <br />

                    <button class="btn btn-sm  btn-block" type="submit" name="action" value="login">LOGIN</button>

                    <div class="create-acc text-link-login">
                      <br />
                      <p>New Ater? <Link to="/register">Đăng ký</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </body>
  )
}
export default Login;