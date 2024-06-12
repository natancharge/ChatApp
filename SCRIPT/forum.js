const firebaseConfig = {
  apiKey: "AIzaSyCmmjSORqrQfaw334CdAlXnYA6_rFBeGD8",
  authDomain: "chatapp-1a0a2.firebaseapp.com",
  projectId: "chatapp-1a0a2",
  storageBucket: "chatapp-1a0a2.appspot.com",
  messagingSenderId: "548724108544",
  appId: "1:548724108544:web:ceddf339e499ef6ce4d7e5",
  measurementId: "G-Q3L5PLRQS7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const myName = localStorage.getItem("username");
const myPassword = localStorage.getItem("password");

if (!myName || !myPassword) {
  alert("Please log in first.");
  window.location.href = "../index.html";
}

function sendMessage() {
  const message = document.getElementById("message").value;

  const newMessage = {
    sender: myName,
    password: myPassword,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection('messages').add(newMessage).then(() => {
    document.getElementById("message").value = '';
    displayMessages();
  }).catch((error) => {
    console.error("Error adding message: ", error);
  });

  return false;
}

function displayMessages() {
  const messagesList = document.getElementById("messages");
  messagesList.innerHTML = '';

  db.collection('messages').orderBy('timestamp').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const msg = doc.data();
      let html = `<li id='message-${doc.id}'>`;

      if (msg.sender === myName && msg.password === myPassword) {
        html += `<button class='btn' data-id='${doc.id}' onclick='deleteMessage(this);'>Delete</button> `;
      }

      html += `${msg.sender}: ${msg.message}`;
      html += `</li><br>`;
      messagesList.innerHTML += html;
    });
  }).catch((error) => {
    console.error("Error getting messages: ", error);
  });
}

function deleteMessage(self) {
  const messageId = self.getAttribute("data-id");

  db.collection('messages').doc(messageId).delete().then(() => {
    const messageElement = document.getElementById("message-" + messageId);
    if (messageElement) {
      messageElement.innerHTML = "Message deleted";
    }
    displayMessages();
  }).catch((error) => {
    console.error("Error deleting message: ", error);
  });
}

// Refresh messages every 3 seconds
setInterval(displayMessages, 3000);
displayMessages();