import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PopupPostCode from '../components/PopupPostCode';
import PopupDom from '../components/PopupDom';

import './MemberScreen.css';

const MemberScreen = () => {

    const findName = localStorage.getItem("userName").substring(1, localStorage.getItem("userName").length - 1);
    const [userInfo, setUnserInfo] = useState('');
    const [email, setEmail] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPostCode = () => {
        setIsPopupOpen(true)
    }

    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    const onChangeAddress = (target) => {

        setFullAddress(target);
    }

    const onChangeEmailHandler = (e) => {

        setEmail(e.target.value);
    }

    const onChangePhone1Handler = (e) => {

        setPhone1(e.target.value);
    }

    const onChangePhone2Handler = (e) => {

        setPhone2(e.target.value);
    }
   
    useEffect(() => {
        try {
            axios.post(
                '/api/v1/members/user', {
                    name : findName,
                }
            ).then( (response) => {
                setUnserInfo(response.data);
                setEmail(response.data.email);
                setPhone1(response.data.phone_num1);
                setPhone2(response.data.phone_num2);
            })
        } catch(e) {
            console.log(e);
        }
    }, []);

    const updateSubmitHandler = () => {
        
        if(window.confirm("Are you sure want to update?")) {
            try {
                axios.post(
                    '/api/v1/members/update', {
                        name : findName,
                        email : email,
                        phone_num1 : phone1,
                        phone_num2 : phone2,
                    }
                ).then(() => {
                    window.location.replace("/");
                })
            } catch(e) {
                console.log(e)
            }
        } else {
            return; 
        }
    }

    return (
        <div className = "main_body">
            <h1>User Information</h1>
            <div className = "form">
                <form id = "signup_form">
                    <legend><span className = "base">!</span>Your basic info</legend>
                    <label htmlFor = "name">Name:</label>
                    <input type = "text" id = "name" name = "user_name" 
                        value = {userInfo.name} readOnly = {true}></input>
                    
                    <label htmlFor = "mail">Email:</label>
                    <input type = "email" id = "mail" name = "user_email" defaultValue = {userInfo.email} 
                        onChange = {onChangeEmailHandler}></input>

                    <label htmlFor = "phone_num1">Phone:</label>
                    <input type = "text" id = "phone_num1" name = "user_phone_num1" defaultValue = {userInfo.phone_num1} 
                        onChange = {onChangePhone1Handler}></input>

                    <label htmlFor = "phone_num2">Tel:</label>
                    <input type = "text" id = "phone_num2" name = "user_phone_num2" defaultValue = {userInfo.phone_num2}
                        onChange = {onChangePhone2Handler}></input>

                    <label htmlFor = "address">Address:
                        <button id = "address_button" type = 'button' onClick={openPostCode}>Address</button>
                        <div id = "popupDom"> {isPopupOpen && (
                            <PopupDom>
                                <PopupPostCode onClose = {closePostCode} onChangeAddress = {onChangeAddress} />
                            </PopupDom> )}
                        </div>
                    </label>
                    <input type = "text" id = "address" name = "user_address" 
                            readOnly = {true} value = {userInfo.fullAddress}></input>

                    <button id = "submit_button" type = "submit" onClick = {updateSubmitHandler}>Update</button>
                </form>
            </div>
        </div>
    );
}

export default MemberScreen;