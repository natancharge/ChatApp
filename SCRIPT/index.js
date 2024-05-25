document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the username and password from the form inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Save the username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    // Redirect to the forum page
    window.location.href = "HTML/forum.html";
  });  