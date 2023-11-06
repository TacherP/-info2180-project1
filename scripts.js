/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector("form[action='#']");
  const emailInput = newsletterForm.querySelector("input[name='email']");
  const messageDiv = document.querySelector(".message");

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const email = emailInput.value;

    if (email.trim() === "") {
      // No email address entered
      messageDiv.textContent = "Please enter a valid email address.";
    } else {
      // Email address entered
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    }

    // Clear the input field
    emailInput.value = "";
  });
});
