const text = "Hey, My Love ❤️";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}

typeEffect();

function reveal() {
  document.getElementById("letter").classList.remove("hidden");
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);
