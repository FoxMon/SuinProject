import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className = "main_body">
            <h1>Sign Up</h1>
            <div className = "form">
                <form id = "signup_form">
                    <legend><span class = "base">!</span>Your basic info</legend>
                    <label for = "name">Name:</label>
                    <input type = "text" id = "name" name = "user_name"></input>
                    
                    <label for = "mail">Email:</label>
                    <input type = "email" id="mail" name = "user_email"></input>
                    
                    <label for = "password">Password:</label>
                    <input type = "password" id = "password" name = "user_password"></input>

                    <label for = "passwordCheck">PasswordCheck:</label>
                    <input type = "password" id = "passwordCheck" name = "user_password_check"></input>

                    <label for = "address">Address:</label>
                    <input type = "text" id = "address" name = "user_address"></input>
                    <button id = "submit_button" type = "submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;