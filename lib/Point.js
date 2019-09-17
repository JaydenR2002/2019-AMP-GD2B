class Point
{

    constructor(position,radius)
      {
        this.position = position;
        this.radius = radius;
      }
        draw(context)
        {
        context.beginPath();
        context.strokeStyle = "rgb(0,0,0)";
        context.fillStyle = "rgb(255,0,0)";
        context.closePath();
        context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();

      }
}
