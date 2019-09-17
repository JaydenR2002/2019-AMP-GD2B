const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let point = new Point(new Vector2d(207,300),100);
let mouseVector = new Vector2d(0,0);
let difference = new Vector2d(0,0);
