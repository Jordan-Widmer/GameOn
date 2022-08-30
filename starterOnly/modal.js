function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// closing the modal
function closeModel() {
  modalbg.style.display = "none";
}

// function that get called when the form submitted. by default when a
// form is submitted in javascript,
// it passes an event object in it in our case i named it as e

// this objects contains bunch of properties and function and I'm using preventDefault function that is used to
// control the behaviour of form submission.

function onFormSubmit(e) {
  e.preventDefault();

  // Validate function returns true if it contains no error otherwise it will return true if there is any error
  if (ValidateForm()) {
    // if the form have no error we are closing the form and showing the message to the user.
    document.getElementById("reserve").style.display = "none";
    document.getElementById("sucessmessage").style.display = "flex";
  } else {
    console.log("error");
    document.getElementById("sucessmessage").style.display = "none";
  }
}

function ValidateForm() {
  // removeAllPreviousErrors function will remove all the previous error messages if we have any.
  removeAllPreviousErrors();

  // this errors array will contains the records of the errors in the form.

  const errors = [];

  // getting the values of each form fields
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const checkbox1 = document.getElementById("checkbox1");
  const checkbox2 = document.getElementById("checkbox2");

  // Checking erros for each field if error showing error message on the webpage and pusing to the array
  if (first === "") {
    const el = document.getElementById("firstError");
    el.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    errors.push({
      error: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
    });
    el.classList.add("is-invalid");
  } else {
    const el = document.getElementById("firstError");
    el.innerText = "Joli prénom";
    el.classList.add("is-valid");
  }
  // Checking erros for each field if error showing error message on the webpage and pusing to the array
  if (last === "") {
    const el = document.getElementById("lastError");
    el.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errors.push({
      error: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    });
    el.classList.add("is-invalid");
  } else {
    const el = document.getElementById("lastError");
    el.innerText = "Un nom original";
    el.classList.add("is-valid");
  }
  // Checking erros for each field if error showing error message on the webpage and pusing to the array
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    const el = document.getElementById("emailError");
    el.innerText = "Veuillez saisir une adresse e-mail valide";
    el.classList.add("is-invalid");
    errors.push({ error: "Veuillez saisir une adresse e-mail valide" });
  } else {
    const el = document.getElementById("emailError");
    el.innerText = "Merci pour l'email";
    el.classList.add("is-valid");
  }
  // Checking erros for each field if error showing error message on the webpage and pusing to the array
  if (birthdate === "") {
    const el = document.getElementById("birthDateError");
    el.innerText = "Vous devez entrer votre date de naissance.";
    el.classList.add("is-invalid");
    errors.push({ error: "Vous devez entrer votre date de naissance." });
  } else {
    const el = document.getElementById("birthDateError");
    el.innerText = "Merveilleux";
    el.classList.add("is-valid");
  }
  // Checking erros for each field if error showing error message on the webpage and pusing to the array
  if (quantity === "") {
    const el = document.getElementById("quantityError");
    el.innerText = "Veuillez saisir un chiffre";
    el.classList.add("is-invalid");
    errors.push({ error: "Veuillez saisir un chiffre" });
  } else {
    const el = document.getElementById("quantityError");
    el.innerText = "Le monsieur est un Gamer";
    el.classList.add("is-valid");
  }
  // Checking erros for each field if error showing error message on the webpage and pusing to the array
  if (validateLocation() == -1) {
    const el = document.getElementById("locationError");
    el.innerText = "Please select a location";
    el.classList.add("is-invalid");
    errors.push({ error: "please select location" });
  } else {
    const el = document.getElementById("locationError");
    el.innerText = "Ce sont tous de belles ville... m'enfin presque ^^'";
    el.classList.add("is-valid");
  }
  if (!checkbox1.checked && !checkbox2.checked) {
    const el = document.getElementById("checkboxError");
    el.innerText =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    el.classList.add("is-invalid");
    errors.push({
      error: "Vous devez vérifier que vous acceptez les termes et conditions.",
    });
  }
  return errors.length > 0 ? false : true;
}

function validateLocation() {
  const location = document.getElementsByName("location");
  let isValidLocation = false;
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {
      return i;
    }
  }
  return -1;
}

// will reset error messags to empty string.
function removeAllPreviousErrors() {
  const formElements = document.getElementsByClassName("error");
  for (item of formElements) {
    item.innerText = "";
    item.classList.remove("is-invalid");
    item.classList.remove("is-valid");
  }
}

// Toggeling the form and showing the sucess message
function toggleForm() {
  document.getElementById("reserve").style.display = "block";
  document.getElementById("sucessmessage").style.display = "none";
  resetForm();
}
// reseting form after the form submission....
function resetForm() {
  removeAllPreviousErrors();
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("email").value = "";
  document.getElementById("birthdate").value = "";
  document.getElementById("quantity").value = "";
}
