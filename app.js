document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const togglePassword = document.getElementById("toggle_password");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting
    validateInputs();
  });

  togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglePassword.classList.toggle("fa-eye-slash");
  });

  function validateInputs() {
    validateField(firstName, "firstname");
    validateField(lastName, "lastname");
    validateEmail(email);
    validateField(password, "password");
  }

  function validateField(input, type) {
    const errorMessage = `${type.charAt(0).toUpperCase() + type.slice(1)} cannot be empty`;
    const inputContainer = input.parentElement;
    const errorElement = inputContainer.querySelector(`.${type}_error`);
    const errorIcon = inputContainer.querySelector(`.${type}_image`);

    if (input.value.trim() === "") {
      errorElement.textContent = errorMessage;
      input.classList.add("error");
      errorIcon.classList.remove("hide");
    } else {
      errorElement.textContent = "";
      input.classList.remove("error");
      errorIcon.classList.add("hide");
    }
  }

  function validateEmail(input) {
    const emailValue = input.value.trim();
    const inputContainer = input.parentElement;
    const errorElement = inputContainer.querySelector(".email_error");
    const errorIcon = inputContainer.querySelector(".email_image");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      errorElement.textContent = "Looks like this is not an email";
      input.classList.add("error");
      errorIcon.classList.remove("hide");
    } else {
      errorElement.textContent = "";
      input.classList.remove("error");
      errorIcon.classList.add("hide");
    }
  }
});
