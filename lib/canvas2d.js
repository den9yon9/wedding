export default class Canvas2D {
  static instance;
  static getInstance () {
    if (!this.instance) throw new Error('请先初始化canvas');
    return this.instance;
  }

  requestId = null;
  canvas;
  ctx;
  sprites = [];

  constructor (canvasSelector, width = document.body.clientWidth, height = document.body.clientHeight) {
    if (Canvas2D.instance) throw new Error('请勿重复创建实例');
    this.canvas = document.querySelector(canvasSelector);
    this.ctx = this.canvas.getContext('2d');

    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.canvas.width = width * window.devicePixelRatio;
    this.canvas.height = height * window.devicePixelRatio;
    Canvas2D.instance = this;
  }

  loopCanvas () {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawCanvas();
    this.requestId = window.requestAnimationFrame(this.loopCanvas.bind(this));
  }

  drawCanvas () {
    this.sprites.forEach(sprite => sprite.draw());
  }

  cancelLoopCanvas () {
    cancelAnimationFrame(this.requestId);
  }
}
