window.onload = function() {
  const firebaseConfig = {
    apiKey: "AIzaSyCmmjSORqrQfaw334CdAlXnYA6_rFBeGD8",
    authDomain: "chatapp-1a0a2.firebaseapp.com",
    projectId: "chatapp-1a0a2",
    storageBucket: "chatapp-1a0a2.appspot.com",
    messagingSenderId: "548724108544",
    appId: "1:548724108544:web:ceddf339e499ef6ce4d7e5",
    measurementId: "G-Q3L5PLRQS7"
  };
}

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