import React,  {useState} from 'react';
import './SignIn.css';

const SignIn = () => {

    const [value, setValue] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
    }
    
    const onChangeValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className = "main">
            <div className = "body">
                <main id = "main_holder">
                    <h1 id = "signin_header">Login</h1>
                    
                    <div id = "signin_error_msg_holder">
                    <p id = "signin_error_msg">Invalid username <span id = "error_msg_second_line">and/or password</span></p>
                    </div>
                    
                    <form id = "signin_form">
                    <input type = "text" name = "userName" id = "userName_field" class = "signin_form_field" placeholder="Username"></input>
                    <input type = "password" name = "password" id = "password_field" class = "signin_form_field" placeholder="Password"></input>
                    <input type = "submit" value = "Login" id = "signin_form_submit"></input>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default SignIn;