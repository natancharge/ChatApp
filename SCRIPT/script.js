const myName = prompt("Enter your name");
const myPassword = prompt("Enter your password");

function sendMessage() {
  // Get message
  var message = document.getElementById("message").value;

  // Get existing messages from local storage
  var database = localStorage.getItem('database');

  // Parse the existing database or initialize a new array if it doesn't exist
  var messages = database ? JSON.parse(database) : [];

  // Create a new message object
  var newMessage = {
    key: Date.now().toString(), // unique identifier based on timestamp
    sender: myName,
    password: myPassword,
    message: message,
    timestamp: new Date().toISOString()
  };

  // Add the new message to the messages array
  messages.push(newMessage);

  // Save the updated messages array back to local storage
  localStorage.setItem('database', JSON.stringify(messages));

  // Clear the input field
  document.getElementById("message").value = '';

  // Prevent form from submitting
  return false;
}

// Function to display messages
function displayMessages() {
  var messagesList = document.getElementById("messages");
  var database = localStorage.getItem('database');
  var messages = database ? JSON.parse(database) : [];

  // Clear the current messages display
  messagesList.innerHTML = '';

  // Display each message
  messages.forEach(function(msg) {
    var html = "<li id='message-" + msg.key + "'>";

    // Show delete button if message is sent by me
    if (msg.sender === myName && msg.password == myPassword) {
      html += "<button class='btn' data-id='" + msg.key + "' onclick='deleteMessage(this);'>Delete</button> ";
    }

    html += msg.sender + ": " + msg.message;
    html += "</li>";

    html += "<br>";

    messagesList.innerHTML += html;
  });
}

function deleteMessage(self) {
  // Get message ID
  var messageId = self.getAttribute("data-id");

  // Get existing messages from local storage
  var database = localStorage.getItem('database');
  var messages = database ? JSON.parse(database) : [];

  // Find the message with the matching ID and remove it
  var updatedMessages = messages.filter(function(msg) {
    return msg.key !== messageId;
  });

  // Save the updated messages array back to local storage
  localStorage.setItem('database', JSON.stringify(updatedMessages));

  // Update the display directly for the deleted message
  var messageElement = document.getElementById("message-" + messageId);
  if (messageElement) {
    messageElement.innerHTML = "Message deleted";
  }
}

// Function to visually update the deleted message
function attachDeleteMessageListener(snapshot) {
  var messageElement = document.getElementById("message-" + snapshot.key);
  if (messageElement) {
    messageElement.innerHTML = "Message deleted";
  }
}

// Polling function to check for new messages every 3 seconds
setInterval(displayMessages, 3000);

// Initial display of messages
displayMessages();