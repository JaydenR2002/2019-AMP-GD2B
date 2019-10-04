const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,true,"blue");
A.draw(context);

let B = new Point(new Vector2d(900,500),20,true,"red")
B.draw(context);

let C = new Point(new Vector2d(400,500),20,true,"red")
C.draw(context);

let D = new Point(new Vector2d(600,100),20,true,"red")
D.draw(context);

let S = new Point(new Vector2d(10,10),8,false,"white")

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);


function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  l.draw(context);
  l.defineLineByTwoPoints(A,B);
  m.draw(context);
  m.defineLineByTwoPoints(C,D);
  S.position.dx = (m.intercept - l.intercept)/(l.slope - m.slope);
  
  S.draw(context);
}
animate();
