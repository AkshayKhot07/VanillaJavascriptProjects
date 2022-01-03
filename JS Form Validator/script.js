"use strict";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  userNameValidation();
  emailIdValidation();
  passwordValidation();
});

function userNameValidation() {
  const userName = document.getElementById("username");

  const userNameValue = userName.value;
  //   console.log(userNameValue);

  //   const userNameLi = document.getElementById("userNameLi");
  const userNameError = document.getElementById("username-error-message");
  console.log(userNameError);

  if (userNameValue.length < 3) {
    userName.style.borderColor = "red";
    // userNameError.style.display = "block";
    userNameError.style.visibility = "visible";

    // userNameLi.insertAdjacentHTML(
    //   "beforeend",
    //   '<div class="error-message">Username must be atleast 3 characters</div>'
    // );
  } else {
    userName.style.borderColor = "lightgreen";
  }
}

function emailIdValidation() {
  const emailId = document.getElementById("email");

  const emailIdValue = emailId.value;

  const emailIdError = document.getElementById("emailid-error-message");

  //   const regex = /\S+@\S+\.\S+/;
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (regex.test(emailIdValue)) {
    emailId.style.borderColor = "lightgreen";
  } else {
    emailId.style.borderColor = "red";

    emailIdError.style.visibility = "visible";
  }
}

function passwordValidation() {
  const password = document.getElementById("password");

  const passwordValue = password.value;
  console.log(passwordValue);

  const passwordError = document.getElementById("password-error-message");

  if (passwordValue.length < 6) {
    password.style.borderColor = "red";

    passwordError.style.visibility = "visible";
  } else {
    password.style.borderColor = "lightgreen";
  }

  confirmPasswordValidation(passwordValue);
}

function confirmPasswordValidation(passwordValue) {
  const confirmPassword = document.getElementById("confirm-password");
  console.log(confirmPassword);

  let confirmPasswordValue = confirmPassword.value;
  console.log(typeof confirmPasswordValue);

  let confirmPasswordError = document.getElementById("password2-error-message");

  if (passwordValue === confirmPasswordValue && confirmPasswordValue !== "") {
    confirmPassword.style.borderColor = "lightgreen";
  } else if (
    passwordValue !== confirmPasswordValue &&
    confirmPasswordValue !== ""
  ) {
    confirmPassword.style.borderColor = "red";

    confirmPasswordError.innerText = "Password do not match";

    confirmPasswordError.style.visibility = "visible";
  } else {
    confirmPassword.style.borderColor = "red";

    confirmPasswordError.style.visibility = "visible";
  }
}
