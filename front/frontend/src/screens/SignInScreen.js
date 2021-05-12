import React,  {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
// import Cookies from 'js-cookie';
import './SignInScreen.css';

const SignIn = ({click}) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // const [loginFlag, setLoginFlag] = useState(false);
    const [token, setToken] = useState('');
    const [redirectFlag, setRedirectFlag] = useState(false);
    useEffect(() => {
        const postUser = () => {
            try {
                axios.post(
                    '/api/v1/members/login', {
                        name : name,
                        password : password,
                        // loginFlag : loginFlag
                    }
                ).then((response) => {
                    const { accessToken } = response.data;
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    // console.log(response.data);
                    setToken(response.data);
                    // setLoginFlag(response.data.loginFlag);
                });
            } catch(err) {
                console.log(err);
            }
        }
        postUser();
    });

    const onSubmitHandler = (e) => {

        e.preventDefault();

        if(token) {

            console.log("로그인 성공");
            alert("로그인 성공했습니다.");
            click = true;
            setRedirectFlag(true);
        } else {

            console.log("로그인 실패");
            alert("회원정보가 없습니다.");
        }
    }

    const onChangeName = (e) => {

        setName(e.target.value);
    }

    const onChangePassword = (e) => {

        setPassword(e.target.value);
    }

    return (
        <div className = "main">
            <div className = "body">
                <main id = "main_holder">
                    <h1 id = "signin_header">Login</h1>
                    
                    <div id = "signin_error_msg_holder">
                    <p id = "signin_error_msg">Invalid username <span id = "error_msg_second_line">and/or password</span></p>
                    </div>
                    
                    <form id = "signin_form" onSubmit = {onSubmitHandler}>
                        <input type = "text" name = "name" id = "userName_field" value = {name} onChange = {onChangeName}
                            className = "signin_form_field" placeholder="Username"></input>

                        <input type = "password" name = "password" id = "password_field" value = {password} onChange = {onChangePassword}
                            className = "signin_form_field" placeholder="Password"></input>

                        <button id = "submit_button" type = "submit">Sign In</button>
                        {redirectFlag && (<Redirect to = "/"></Redirect>)}
                    </form>
                </main>
            </div>
        </div>
    );
}

export default SignIn;