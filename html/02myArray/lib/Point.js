class Point
{

    constructor(position,radius, draggable)
      {
        this.position = position;
        this.radius = radius;
        this.draggable = false || draggable;
        if(this.draggable){
          this.drag();
        }
      }
        draw(context)
        {
        context.beginPath();
        context.strokeStyle = "rgb(0,0,255)";
        context.fillStyle = "rgba(255,0,0,0.3)";
        context.closePath();
        context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();
      }
}
