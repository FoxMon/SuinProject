const signupForm = document.getElementById("signup_form");
const signupButton = document.getElementById("submit_button");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();

    const password = signupForm.user_password.value;
    const passwordCheck = signupForm.user_password_check.value;

    if(password === passwordCheck) {
        alert("Success !!!");
    } else {
        alert("Fail !!!");
    }
})