import React from 'react';


const Register = () => {

  return (
<body >
    <section id="content" >
        <div class="container width-register">
            <div class="row">
              <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="card card-signin flex-row my-5">
                  
                  <div class="card-body">
                    <h5 class="card-title text-center" >Register</h5>
                    <form class="form-signin" method="post" action = "">
                        <div class="form-label-group">
                            <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required/>
                            <label for="inputEmail">Email address</label>
                          </div>
                      <div class="form-label-group">
                        <input name="username" type="text" id="inputUserame" class="form-control" placeholder="Username" required autofocus/>
                        <label for="inputUserame">Username</label>
                      </div>       
                      <div class="form-label-group">
                        <input name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <label for="inputPassword">Password</label>
                      </div>                      
                      <div class="form-label-group">
                        <input name="confirm" type="password" id="inputConfirmPassword" class="form-control" placeholder="Password" required/>
                        <label for="inputConfirmPassword">Confirm password</label>
                      </div>
                      <br/>       
                        <button class="btn btn-sm  btn-block"  id="btnRegister" type="submit" name="action" value="register">Register</button>                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
</body>
  )
}
export default Register;