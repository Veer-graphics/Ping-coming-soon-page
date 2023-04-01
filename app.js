const form = document.querySelector("form");
const emailField = form.querySelector(".field");
const emailInput = emailField.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("button clicked");
    checkEmail();
})

function checkEmail()
{
    let emailError = emailField.querySelector(".error-txt");
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.value == "")
    {
        emailField.classList.add("error");
        emailError.innerText = "Whoops, you forgot to enter your email address!";
    }
    else if(!emailInput.value.match(emailPattern))
    {
        emailField.classList.add("error");
        emailError.innerText = "Please provide a valid email address"
    }
    else{
        emailField.classList.remove("error");
    }
}