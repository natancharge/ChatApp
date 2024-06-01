document.getElementById("toggle-password").addEventListener("click", function() {
  const passwordInput = document.getElementById("password");
  const togglePasswordIcon = document.getElementById("toggle-password");
  const togglePasswordOpenIcon = document.getElementById("toggle-password-open");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordIcon.style.display = "none";
      togglePasswordOpenIcon.style.display = "inline";
  } else {
      passwordInput.type = "password";
      togglePasswordIcon.style.display = "inline";
      togglePasswordOpenIcon.style.display = "none";
  }
});

document.getElementById("toggle-password-open").addEventListener("click", function() {
  const passwordInput = document.getElementById("password");
  const togglePasswordIcon = document.getElementById("toggle-password");
  const togglePasswordOpenIcon = document.getElementById("toggle-password-open");

  if (passwordInput.type === "text") {
      passwordInput.type = "password";
      togglePasswordIcon.style.display = "inline";
      togglePasswordOpenIcon.style.display = "none";
  } else {
      passwordInput.type = "text";
      togglePasswordIcon.style.display = "none";
      togglePasswordOpenIcon.style.display = "inline";
  }
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the username and password from the form inputs
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Save the username and password to localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Redirect to the forum page
  window.location.href = "HTML/menu.html";
});