const myName = localStorage.getItem("username");
const myPassword = localStorage.getItem("password");

if (!myName || !myPassword) {
  alert("Please log in first.");
  window.location.href = "../index.html";
}

function sendMessage() {
  const message = document.getElementById("message").value;
  const database = localStorage.getItem('database');
  const messages = database ? JSON.parse(database) : [];

  const newMessage = {
    key: Date.now().toString(),
    sender: myName,
    password: myPassword,
    message: message,
    timestamp: new Date().toISOString()
  };

  messages.push(newMessage);
  localStorage.setItem('database', JSON.stringify(messages));
  document.getElementById("message").value = '';
  return false;
}

function displayMessages() {
  const messagesList = document.getElementById("messages");
  const database = localStorage.getItem('database');
  const messages = database ? JSON.parse(database) : [];

  messagesList.innerHTML = '';

  messages.forEach(function(msg) {
    let html = `<li id='message-${msg.key}'>`;

    if (msg.sender === myName && msg.password === myPassword) {
      html += `<button class='btn' data-id='${msg.key}' onclick='deleteMessage(this);'>Delete</button> `;
    }

    html += `${msg.sender}: ${msg.message}`;
    html += `</li><br>`;
    messagesList.innerHTML += html;
  });
}

function deleteMessage(self) {
  const messageId = self.getAttribute("data-id");
  const database = localStorage.getItem('database');
  const messages = database ? JSON.parse(database) : [];
  const updatedMessages = messages.filter(msg => msg.key !== messageId);

  localStorage.setItem('database', JSON.stringify(updatedMessages));
  const messageElement = document.getElementById("message-" + messageId);
  if (messageElement) {
    messageElement.innerHTML = "Message deleted";
  }
}

setInterval(displayMessages, 3000);
displayMessages();