/* Millennium Falcon with Pure CSS */
/* Starfield with Canvas Javascript */

const canvas = document.querySelector("#canvas-rain");
const ctx = canvas.getContext("2d");
canvas.width = 1920 - 40;
canvas.height = 1080 - 160;

const MAX_STARS = 250;
const STAR_COLORS = ["#444", "#888", "#FFF"];

class Stars {
  constructor() {
    this.stars = [];
    for (let i = 0; i < MAX_STARS; i++) {
      const x = ~~(Math.random() * canvas.width);
      const y = ~~(Math.random() * canvas.height);
      const speed = ~~(1 + Math.random() * 5);
      const color = ~~(Math.random() * 3);
      this.stars.push({
        x,
        y,
        speed,
        color
      });
    }
  }

  draw() {
    for (let i = 0; i < MAX_STARS; i++) {
      const star = this.stars[i];
      ctx.lineWidth = 1;
      ctx.strokeStyle = STAR_COLORS[this.stars[i].color];
      ctx.strokeRect(star.x, star.y, 1, 1);
    }
  }

  update() {
    for (let i = 0; i < MAX_STARS; i++) {
      this.stars[i].y += this.stars[i].speed;
      const isOutScreen = this.stars[i].y > canvas.height;
      isOutScreen && (this.stars[i].y = 0);
    }
  }
}


const stars = new Stars();

console.log(stars.stars);

const clearScreen = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

const loop = () => {
  clearScreen();
  requestAnimationFrame(loop);
  stars.update();
  stars.draw();
};

loop();