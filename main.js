
function setup() {
    canvas= createCanvas(350,350);
      video= createCapture(VIDEO);
      video.hide();
      canvas.center();
    }
    
    function draw() {
      fill("green");
      stroke("green");
    circle(50,50,50);
      fill("green");
      stroke("green");
    circle(300,50,50);
      fill("green");
      stroke("green");
    circle(50,300,50);
        fill("green");
      stroke("green");
    circle(300,300,50);
      fill("red");
      stroke("red");
      rect(35,70,30,210);
      fill("red");
      stroke("red");
      rect(285,70,30,210);
        fill("red");
      stroke("red");
      rect(70,35,210,30);
      fill("red");
      stroke("red");
      rect(70,285,210,30);
      image(video,100,100,150,150);
    }
    
    function take_snapshot(){
        save('photo.png')
    }