import React from 'react';
import './css/login.css'

const logIn = () => {
    return(
        <div>
                <div id="container">
        
        <div className="page_name">
            <h3>SIGN IN</h3>
        </div>
    
        <div id="cont">
            <div id="login_cont">
                <div id="login_detail_h">
                    <h3>SIGN IN DETAIL</h3>
                </div>
                
                <div  id="uname_input_cont">
                    <label for="uname">Email (or username): <br/></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label for="psw"><br/>Password:<br/></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                    
                    <button id="register_btn" class="btn" type="btn" name="btn" href="./Register.js">
                    Register
                    </button>

                    <button id="login_btn" type="submit">Login</button>
                </div>
            </div>
        </div>

    </div>
        </div>
    )
}

export default logIn;