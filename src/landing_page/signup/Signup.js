import React from 'react';

function Signup() {
    return ( 
        <form>
        <div class="mb-3"   style= {{width : "500px" , margin :  "0 auto"}}>  
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3" style= {{width : "500px" , margin :  "0 auto"}}>
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" class="btn btn-primary" style={{display: "block", margin: "0 auto"}}>SignUp</button>
      </form>
     );
}

export default Signup;