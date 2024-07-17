// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");

const resetbtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};


// add callback functions for other input events.
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

confirmPasswordInput.onkeyup = () => {
  confirmPasswordInput.classList.remove("is-valid");
  confirmPasswordInput.classList.remove("is-invalid");
};
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  var isFirstNameOk = false;
  var isLastNameOk = false;
  var isconpassOk = false;
  var isemailOk = false;
  var ispassOk = false;
  // validate first name
  if (firstNameInput.value !== "") {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
    
  } else {
    firstNameInput.classList.add("is-invalid");
  }

  if (lastNameInput.value !== "") {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
    
  } else {
    lastNameInput.classList.add("is-invalid");
  }

  

  // validate email
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isemailOk = true;
  }

  // validate password
  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    ispassOk = true;
  }

  // validate confirm password
  if (passwordInput.value!== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("is-invalid");
  } else {
    confirmPasswordInput.classList.add("is-valid");
    isconpassOk = true;
  }

  if (isFirstNameOk&&isLastNameOk&&isconpassOk&&ispassOk) alert("Registered successfully");
};

// add callback function for Reset button.
resetbtn.onclick = () => {
  firstNameInput.value = "";
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");

  lastNameInput.value = "";
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");

  emailInput.value = "";
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");

  passwordInput.value = "";
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");

  confirmPasswordInput.value = "";
  confirmPasswordInput.classList.remove("is-invalid");
  confirmPasswordInput.classList.remove("is-valid");
};