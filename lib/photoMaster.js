import Photo from './photo.js';
import Canvas2D from './canvas2d.js';

Array.prototype.getSample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

export default class HeartMaster {
  album = [1,2,3,4]
  photos = [];
  sizes = [ 1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2 ];
  canvas2d = Canvas2D.getInstance();
  canvas = this.canvas2d.canvas;

  constructor (amount) {
    for (let index = 0; index < amount; index++) {
      let size = this.sizes.getSample();
      let X = Math.random() * this.canvas.width;
      let angle = 30 + Math.random() * -60;
      let photo = new Photo(`http://localhost:8080/assets/${this.album.getSample()}.jpg`, 150, X, -300, size, angle);
      this.photos.push(photo);
    }
    this.snow();
  }

  //  像下雪一样下爱心
  snow () {
    this.photos.forEach(heart => setTimeout(heart.drop.bind(heart), Math.random() * 20000));
  }
}
