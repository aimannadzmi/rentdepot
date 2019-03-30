import React from "react";
import '../loginpage/login.css';

const Login = () => (
    <div className="container">
    <form className="loginPage">
        <img className="rentdepotlogo" src="" />
        <div className="email">Email:
                <input className="userinput" type="text" name="email" />
        </div>

        <div className="password">Password:
                <input className="passwordinput" type="text" name="password" />
        </div>

        <button className="loginbtn">Login</button>
        <button className="signupbtn">Sign Up</button>

    </form>
    </div>

)

export default Login;