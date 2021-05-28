import React from 'react';
import DaumPostCode from 'react-daum-postcode';

import './PopupPostCode.css';

const PopupPostCode = (props, onChangeAddress) => {

    const postCodeHandler = (data) => {

        let fullAddress = data.address;
        let extraAddress = '';

        if(data.addressType === 'R') {
            if(data.bname !== '') {
                extraAddress += data.bname;
            }

            if(data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }

            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        console.log(data);
        console.log(data.bname);
        // console.log(fullAddress);
        // console.log(data.zonecode);
        props.onChangeAddress(fullAddress);
        props.onClose();
    }

    const postCodeStyle = {

        display : "block",
        position : "absolute",
        top : "10%",
        width : "600px",
        height : "600px",
        padding : "7px",
    };
 
    return(

        <div>
            <DaumPostCode style = {postCodeStyle} onComplete =  {postCodeHandler}></DaumPostCode>
            <button id = "close_button" type = "button" onClick={ () => { props.onClose() } } className = "postCode_btn">Close</button>
        </div>
    );
}

export default PopupPostCode;