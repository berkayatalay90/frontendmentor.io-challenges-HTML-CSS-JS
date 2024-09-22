function validateEmail1() {
    // Get the email input values
    const email1 = document.getElementById('emailInput1').value;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (emailRegex.test(email1)) {
        // Email is valid, you can perform further actions here
        console.log(email1);
        document.getElementById('email-error-msg1').style.display = "none";
        document.getElementById("emailInput1").classList.remove("red-border");
    } else {
        // Email is not valid, display an error message
        document.getElementById('email-error-msg1').style.display = "unset";
        document.getElementById("emailInput1").classList.add("red-border");
    }
}

function validateEmail2() {
    // Get the email input values

    const email2 = document.getElementById("emailInput2").value;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (emailRegex.test(email2)) {
        // Email is valid, you can perform further actions here
        console.log(email2);
        document.getElementById('email-error-msg2').style.display = "none";
        document.getElementById("emailInput2").style.border = "unset";
    } else {
        // Email is not valid, display an error message
        document.getElementById('email-error-msg2').style.display = "unset";
        document.getElementById("emailInput2").style.border = "2px solid rgb(189, 4, 4)";
    }
}