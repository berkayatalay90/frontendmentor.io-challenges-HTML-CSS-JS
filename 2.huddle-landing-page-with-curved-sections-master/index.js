function validateEmail() {

    const email = document.getElementById("emailInput").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailErrorMsg = document.getElementById("email-error-msg");

    if (emailRegex.test(email)) {
        console.log(email);
        emailErrorMsg.style.display = "none";
    } else {
        emailErrorMsg.style.display = "unset";
    }
}

