import Sprite from './sprite.js';

export default class Heart extends Sprite {
  size;
  color;
  angle;
  minX;
  minY;
  maxX;
  maxY;
  // 组成图形的曲线数组, 点 [0, 0] 即为锚点
  curves = [
    [ [ 0, -30 ], [ -22, -40 ], [ -22, -10 ], [ 0, 0 ] ],
    [ [ 0, -30 ], [ +22, -40 ], [ +22, -10 ], [ 0, 0 ] ]
  ];
  constructor (size, color, angle = 0, X, Y) {
    super(X, Y, size);
    this.size = size;
    this.color = color;
    this.angle = angle;

    this.curves.forEach(curve =>
      curve.forEach(point =>
        point.forEach((value, index, point) => {
          point[index] = value * this.size;
        })
      )
    );

    let minX = Math.min(...this.curves.flat().map(item => item[0]));
    let minY = Math.min(...this.curves.flat().map(item => item[1]));
    let maxX = Math.max(...this.curves.flat().map(item => item[0]));
    let maxY = Math.max(...this.curves.flat().map(item => item[1]));

    this.minX = minX;
    this.minY = minY;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  drop () {
    this.animation = function () {
      this.y = this.Y + 0.005 * this.size * this.counter ** 2;
      this.ctx.translate(this.x, this.y);
      this.counter++;
      if (this.y > this.canvas.height + 300) {
        this.y = 0;
        this.counter = 0;
        this.x = Math.random() * this.canvas.width;
        this.angle = 30 + Math.random() * -60;
      }
    };
  }

  testChoosed (x, y) {
    return this.minX < x < this.maxX && this.minY < y < this.maxY;
  }

  draft () {
    this.ctx.fillStyle = this.color;
    this.ctx.rotate(this.angle * Math.PI / 180);
    this.ctx.beginPath();
    this.curves.forEach(curve => {
      this.ctx.moveTo(...curve[0]);
      this.ctx.bezierCurveTo(...curve[1], ...curve[2], ...curve[3]);
    });
    this.ctx.fill();
  }
}
