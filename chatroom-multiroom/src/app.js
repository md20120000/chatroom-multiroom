let currentRoom = "الرياض";
let messages = {
  "الرياض": [],
  "جدة": [],
  "دبي": []
};

function switchRoom(room) {
  currentRoom = room;
  document.getElementById("room-name").textContent = room;
  renderMessages();
}

function sendMessage() {
  const input = document.getElementById("message");
  const text = input.value.trim();
  if (text === "") return;
  messages[currentRoom].push({ text, time: new Date().toLocaleTimeString() });
  input.value = "";
  renderMessages();
}

function renderMessages() {
  const box = document.getElementById("chat-box");
  box.innerHTML = "";
  messages[currentRoom].forEach((msg) => {
    const div = document.createElement("div");
    div.className = "msg";
    div.innerHTML = `<b>🗯️</b> ${msg.text}<div style="font-size: 0.7em; color: #888">${msg.time}</div>`;
    box.appendChild(div);
  });
}