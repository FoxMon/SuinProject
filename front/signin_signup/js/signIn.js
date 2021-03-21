const signinForm = document.getElementById("signin_form");
const signinButton = document.getElementById("signin_form_submit");
const signinErrorMsg = document.getElementById("signin_error_msg");

signinButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const userName = signinForm.userName.value;
    const password = signinForm.password.value;

    if(userName === "test" && password === "test") {
        alert("Success");
    } else {
        signinErrorMsg.style.opacity = 1;
    }
})