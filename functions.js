canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width= 15;
car1_height= 15;
car1_x= 10;
car1_y= 10;
car1_image= "Car1.png";

car2_width= 15;
car2_height= 15;
car2_x= 20;
car2_y= 20;
car2_image= "Car2.png";

background_image= "CanvasBG.jpg";

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;

    car1_imgTag= new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src= car1_image;

    car2_imgTag= new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src= car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,canvas.width,canvas.height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,canvas.width,canvas.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyEntered= e.keyCode;
    console.log(keyEntered);

    if (keyEntered==38){
        car1up();
        console.log("up");
    }
    if (keyEntered==40){
        car1down();
        console.log("down");
    }
    if(keyEntered==37){
        car1left();
        console.log("left");
    }
    if(keyEntered==39){
        car1right();
        console.log("right");
    }

    if(keyEntered==87){
        car2up();
        console.log("w-up");
    }
    if(keyEntered==83){
        car2down();
        console.log("s-down");
    }
    if(keyEntered==65){
        car2left();
        console.log("a-left");
    }
    if(keyEntered==68){
        car2right();
        console.log("d-right");
    }
}