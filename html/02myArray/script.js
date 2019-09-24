const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let mouseVector = new Vector2d(0,0);
let difference = new Vector2d(0,0);
let point = new Point(new Vector2d(getRandom(width), getRandom(height)),20);
point.draw(context);
function getRandom(max)
{
  return Math.floor(Math.random()*max);
}
