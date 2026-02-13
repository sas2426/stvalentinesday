const canvas = document.getElementById('kissFlowCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

// Particle representing a "Data Kiss" or "Star"
class KissParticle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1; // Flow movement
    this.speedY = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    // Periodic boundary (the flow cycle)
    if (this.x > canvas.width) this.x = 0;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.fillStyle = '#ff4d6d'; // Romantic Pink/Red
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    
    // The "Connection Kiss": Draw lines between nearby data points
    for (let j = i; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.strokeStyle = `rgba(255, 77, 109, ${1 - distance/100})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}
