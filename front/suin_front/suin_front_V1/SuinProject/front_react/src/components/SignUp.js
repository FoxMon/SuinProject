import React, {useState, useEffect} from 'react';
import './SignUp.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import SignIn from './SignIn';

const SignUp = () => {

    const [signUpCheck, setSignUpCheck] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [phone_num1, setPhone_num1] = useState('');
    const [phone_num2, setPhone_num2] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onSubmitHandler = (e) => {

        e.preventDefault();

        if(password !== passwordCheck) {

            alert("비밀번호를 재확인하세요.");
            return setPasswordError(true);
        }

        if(name === '' || passwordCheck === '' || phone_num1 === '' || phone_num2 === '') {

            alert("회원정보를 모두 입력해주세요.");
            setSignUpCheck(false);

            return;
        }

        userPost();

        if({signUpCheck}) {

            alert("회원가입이 완료됐습니다.");
        }
    }

    /**
     * on change method
     */

    const onChangeName = (e) => {

        setName(e.target.value);
    }

    const onChangePassword = (e) => {

        setPassword(e.target.value);
    }

    const onChangePasswordCheck = (e) => {

        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }

    // const onChangeAddress = (e) => {

    //     setAddress(e.target.value);
    // }

    const onChangeEmail = (e) => {

        setEmail(e.target.value);
    }

    const onChangePhone = (e) => {

        setPhone_num1(e.target.value);
    }

    const onChangeTel = (e) => {

        setPhone_num2(e.target.value);
    }

    /**
     * user post
     */

    const userPost = () => {
        const postUser = async () => {
          try {

            await axios.post(
              '/api/v1/members/signup', {
                    name : name,
                    password : password,
                    phone_num1 : phone_num1,
                    phone_num2 : phone_num2,
                    email : email
                }
            );

            console.log("성공");
            setSignUpCheck(true);
          } catch (e) {
              console.log(e);
          }
        }
    
        postUser();
      }

    return (
        <div className = "main_body">
            <h1>Sign Up</h1>
            <div className = "form">
                <form id = "signup_form" onSubmit = {onSubmitHandler}>
                    <legend><span className = "base">!</span>Your basic info</legend>
                    <label for = "name">Name:</label>
                    <input type = "text" id = "name" name = "user_name" value = {name} onChange = {onChangeName}></input>
                    
                    <label for = "mail">Email:</label>
                    <input type = "email" id = "mail" name = "user_email" value = {email} onChange = {onChangeEmail}></input>
                    
                    <label for = "password">Password:</label>
                    <input type = "password" id = "password" name = "user_password" 
                            value = {password} onChange = {onChangePassword}></input>

                    <label for = "passwordCheck">PasswordCheck:</label>
                    <input type = "password" id = "passwordCheck" name = "user_password_check" 
                            value = {passwordCheck} onChange = {onChangePasswordCheck}></input>

                    <label for = "phone_num1">Phone:</label>
                    <input type = "text" id = "phone_num1" name = "user_phone_num1" 
                            value = {phone_num1} onChange = {onChangePhone}></input>

                    <label for = "phone_num2">Tel:</label>
                    <input type = "text" id = "phone_num2" name = "user_phone_num2" 
                            value = {phone_num2} onChange = {onChangeTel}></input>

                    {/* <label for = "address">Address:</label>
                    <input type = "text" id = "address" name = "user_address" 
                      ></input> */}


                    <button id = "submit_button" type = "submit">Sign Up</button>
                    {signUpCheck && (<Redirect to = "/signin"></Redirect>)}
                </form>
            </div>
        </div>
    );
}

export default SignUp;