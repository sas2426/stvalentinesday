
const canvas = document.getElementById('kissFlowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const colors = ['#ff66cc', '#ffd700', '#66ccff', '#ffffff', '#ff99ff'];

class Particle {
  constructor(x, y, speedX, speedY, size, color) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
    this.color = color;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.01;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initParticles(num) {
  particles = [];
  for (let i = 0; i < num; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 2;
    let speedY = (Math.random() - 0.5) * 2;
    let size = Math.random() * 3 + 1;
    let color = colors[Math.floor(Math.random() * colors.length)];
    particles.push(new Particle(x, y, speedX, speedY, size, color));
  }
}

function animate() {
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

let zodaImg = new Image();
zodaImg.src = "ChatgptZoda.png"; // your image file
function drawZoda() {
  ctx.drawImage(zodaImg, canvas.width/2 - 50, 100, 100, 60);
}
// Gravity Well Effect
canvas.addEventListener('mousedown', (e) => {
  particles.forEach(p => {
    let dx = e.clientX - p.x;
    let dy = e.clientY - p.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 300) {
      p.speedX += dx / 20;
      p.speedY += dy / 20;
      p.size += 2;
    }
  });
});

canvas.addEventListener('mouseup', () => {
  particles.forEach(p => {
    p.speedX *= -2;
    p.speedY *= -2;
    p.size = Math.random() * 3 + 1;
  });
});
function fadeImage(img, x, y, w, h, fadeInDuration = 2000, holdDuration = 1000, fadeOutDuration = 2000) {
  let start = null;
  let phase = "fadeIn";

  function animate(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let opacity = 0;

    if (phase === "fadeIn") {
      opacity = Math.min(progress / fadeInDuration, 1);
      if (progress >= fadeInDuration) {
        phase = "hold";
        start = timestamp;
      }
    } else if (phase === "hold") {
      opacity = 1;
      if (progress >= holdDuration) {
        phase = "fadeOut";
        start = timestamp;
      }
    } else if (phase === "fadeOut") {
      opacity = Math.max(1 - progress / fadeOutDuration, 0);
      if (progress >= fadeOutDuration) return; // stop animation
    }

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.drawImage(img, x, y, w, h);
    ctx.restore();

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
// Timed Narrative Stages
function narrativeStages() {
  setTimeout(() => document.getElementById('message').innerText = "0.00s Spark: The Human Kiss", 1000);
  setTimeout(() => document.getElementById('message').innerText = "0.01s Solar Echo: The Light Kiss", 2000);
  setTimeout(() => document.getElementById('message').innerText = "0.05s Abyssal Flow: Lunar Kiss", 4000);
  setTimeout(() => document.getElementById('message').innerText = "0.08s Galactic Center: Honey Bee Dance", 6000);
  setTimeout(() => document.getElementById('message').innerText = "0.12s Arrival: The Nuzzle", 8000);
  setTimeout(() => document.getElementById('message').innerText = "0.15s Completion: Universal Kiss", 10000);
}

initParticles(200);
animate();
narrativeStages();
// Load images
let images = {};
function loadImages() {
  images.spark = new Image();
  images.spark.src = "spark.jpeg"; // replace with your lightning image filename

  images.zoda = new Image();
  images.zoda.src = "ChatgptZoda.png"; // replace with your shuttle image filename

  images.cables = new Image();
  images.cables.src = "nature.jpeg"; // replace with your surreal nature image filename

  images.dataCenter = new Image();
  images.dataCenter.src = "robot.jpeg"; // replace with your robot cosmic image filename

  images.phone = new Image();
  images.phone.src = "book.jpeg"; // replace with your book/nature image filename

  images.completion = new Image();
  images.completion.src = "earth.jpeg"; // replace with whimsical Earth/flowers image filename
}
loadImages();
function fadeInOutImage(img, x, y, w, h, duration = 2000) {
  let start = null;
  function animate(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let opacity = Math.min(progress / duration, 1);

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.drawImage(img, x, y, w, h);
    ctx.restore();

    if (progress < duration) {
      requestAnimationFrame(animate);
    } else {
      setTimeout(() => fadeOutImage(img, x, y, w, h, duration), 1000);
    }
  }
  requestAnimationFrame(animate);
}

function fadeOutImage(img, x, y, w, h, duration = 2000) {
  let start = null;
  function animate(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    let opacity = Math.max(1 - progress / duration, 0);

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.drawImage(img, x, y, w, h);
    ctx.restore();

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}
function narrativeStages() {
  setTimeout(() => {
    document.getElementById('message').innerText = "0.00s Spark: The Human Kiss";
    fadeImage(images.spark, canvas.width/2 - 100, 100, 200, 200);
  }, 1000);

  setTimeout(() => {
    document.getElementById('message').innerText = "0.01s Zoda Echo: The Satellite Kiss";
    fadeImage(images.zoda, canvas.width/2 - 150, 150, 300, 200);
  }, 2000);

  setTimeout(() => {
    document.getElementById('message').innerText = "0.05s Abyssal Flow: Lunar Kiss";
    fadeImage(images.cables, canvas.width/2 - 150, 200, 300, 200);
  }, 4000);

  setTimeout(() => {
    document.getElementById('message').innerText = "0.08s Galactic Center: Honey Bee Dance";
    fadeImage(images.dataCenter, canvas.width/2 - 150, 250, 300, 200);
  }, 6000);

  setTimeout(() => {
    document.getElementById('message').innerText = "0.12s Arrival: The Nuzzle";
    fadeImage(images.phone, canvas.width/2 - 150, 300, 300, 200);
  }, 8000);

  setTimeout(() => {
    document.getElementById('message').innerText = "0.15s Completion: Universal Kiss";
    fadeImage(images.completion, canvas.width/2 - 150, 350, 300, 200);
    document.getElementById('heartbeat').play(); // optional sound sync
  }, 10000);

}