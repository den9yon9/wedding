import Canvas2D from './canvas2d.js';
import HeartMaster from './heartMaster.js';
import PhotoMaster from './photoMaster.js';

const canvas = new Canvas2D('#canvas');
canvas.loopCanvas();

const heartMaster = new HeartMaster(100);
heartMaster.snow();

const photoMaster = new PhotoMaster(10)
photoMaster.snow()
