import Canvas2D from './canvas2d.js';
// import HeartMaster from './heartMaster.js';
// import PhotoMaster from './photoMaster.js';
import Container from './container.js'
import Sprite from './sprite.js'
import Text from './text.js'
// window.devicePixelRatio = 1 
const canvas = new Canvas2D('#canvas');
canvas.loopCanvas();

let container = new Container(200,200,200,200)

let star = new Sprite('https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg', 0, 0, 100)
let star2 = new Sprite('https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3256100974,305075936&fm=26&gp=0.jpg', 100, 100, 100)
let text = new Text('ƒdpqbƒ', '200px', 0,0, 'center')
console.log(text.width)

container.appendChild(star)
container.appendChild(star2)
container.appendChild(text)

setTimeout(()=>{
    container.removeChild(star2)
},5000)

// const heartMaster = new HeartMaster(100);
// heartMaster.snow();

// const photoMaster = new PhotoMaster(10)
// photoMaster.snow()
