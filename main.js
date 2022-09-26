canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

carheight = 90;
carwidth = 100;

backgroundimgtag = "parkingLot.jpg";
carimgtag = "car2.png";

carx = 10;
cary = 10;

function add() {
		backgroundimgtag = new Image();
		backgroundimgtag.onload = backgroundimgfun;
		backgroundimgtag.src = backgroundimg;
	
		carimgtag = new Image();
		carimgtag.onload = carimgfun;
		carimgtag.src = carimg;
}

function uploadBackground() {
	ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(carimgtag, carx, cary, carwidth, carheight);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{  if (cary>=0) {
	cary = cary -10;
	console.log ("When up is clicked x = " + carx + "y = " + cary);
	backgroundimgfun();
	carimgfun();
}
	
}

function down()
{
	 if (cary<=500) {
        cary = cary +10;
        console.log ("When down is clicked x = " + carx + "y = " + cary);
        backgroundimgfun();
        roverimgfun();
    }
}

function left()
{
	if (carx>=0) {
        carx = carx -10;
        console.log ("When left is clicked x = " + carx + "y = " + cary);
        backgroundimgfun();
        carimgfun();
    }
}

function right()
{
	 if (carx<=700) {
        carx = carx +10;
        console.log ("When right is clicked x = " + carx + "y = " + cary);
        backgroundimgfun();
        roverimgfun();
    }
}
