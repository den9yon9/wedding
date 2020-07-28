import SpriteImage from './image-sprite.js';

export default class Photo extends SpriteImage {
  size = 1;
  rotate = 0;
  constructor (src, width, X, Y, size, rotate) {
    super(src, X, Y, width);
    this.size = size;
    this.rotate = rotate;
  }

  draft () {
    this.ctx.fillStyle = 'yellow';
    this.ctx.scale(this.size, this.size);
    this.ctx.rotate(this.rotate * Math.PI / 180);
    this.ctx.fillRect(-this.left - 2, -this.top - 2, this.width + 4, this.height + 4);
    super.draft();
  }

  async drop () {
    this.animation = function () {
      this.y = this.Y + 0.01 * this.counter ** 2;
      this.ctx.translate(this.x, this.y);
      this.counter++;
      if (this.y > this.canvas.height + 300) {
        this.y = 0;
        this.counter = 0;
        this.x = Math.random() * this.canvas.width;
      }
    };
  }
}
