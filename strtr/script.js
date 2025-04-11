const alienMessages = [
    "¤ TRANSMISIE... TRADUCERE EROARE ¤",
    "[∑ΨΓΨ] Salutare, ființă fragilă din carbon.",
    "Semnal deviat. Conștiința ta este scanată.",
    "TRANSMISIE BINARĂ: 1010101010010011...",
    "Tu ești... gustos? Întrebăm pentru un prieten.",
    "click Zzzt! S-a auzit o pisică în spațiu?",
    "NOI SUNTEM XAR-42. TU EȘTI TU?",
    "Semnale vitale detectate. Transmit brioșe virtuale...",
    "Cod galactic acceptat. Rețea instabilă... bzzt",
    "Te vedem. Dar nu fizic. Mai mult... cu simțul al șaselea."
  ];
  
  function sendMessage() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    const glitchSound = document.getElementById("glitchSound");
  
    if (input.value.trim() === "") return;
  
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-message");
    userDiv.textContent = "TU: " + input.value;
    chatbox.appendChild(userDiv);
  
    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
  
    setTimeout(() => {
      const botDiv = document.createElement("div");
      const randIndex = Math.floor(Math.random() * alienMessages.length);
      botDiv.classList.add("alien-message");
      botDiv.textContent = "XAR-42: " + alienMessages[randIndex];
      chatbox.appendChild(botDiv);
      chatbox.scrollTop = chatbox.scrollHeight;
      glitchSound.play();
    }, 1000 + Math.random() * 1000);
  }

const canvas = document.getElementById("space-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    d: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00f0ff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, false);
    ctx.fill();
  });
  updateStars();
}

function updateStars() {
  stars.forEach(star => {
    star.y += star.d;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}
animate();