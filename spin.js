let speed = 20;
let scale = .5;
let canvas;
let ctx;
let logoColor;
window.addEventListener("resize", ()=>{
	for (bulbe of bulbes) {
		bulbe.x = Math.floor((window.innerWidth - 250) / 2);
		bulbe.y = Math.floor((window.innerHeight - 250) / 2);
	}
});

let bulbes = [];
let images = [["./assets/20poggies.png", 0.5], ["./assets/poggies.png", 2]];

(function main() {
    canvas = document.getElementById("background");
	ctx = canvas.getContext("2d");

	for (i = 0; i < 10; i++) {
		var xPosRandom = Math.random();
		var yPosRandom = Math.random();
		var xSpeedRandom = (Math.random()-0.5) * 8;
		var ySpeedRandom = (Math.random()-0.5) * 8;
		var thetaSpeedRandom = (Math.random()-0.5)*.1
		bulbes.push(
			{
				x: Math.floor((window.innerWidth - 250) * xPosRandom),
				y: Math.floor((window.innerHeight - 250) * yPosRandom),
				theta: 0,
				xSpeed: xSpeedRandom,
				ySpeed: ySpeedRandom,
				thetaSpeed: thetaSpeedRandom,
				img: new Image(),
				scale: 1
			}
		)
	}

	for (bulbe of bulbes) {
		var index = Math.round(Math.random());
		bulbe.img.src = images[index][0];
		bulbe.scale = images[index][1];
	}
    update();
}
)();

function update() {
    setTimeout(()=>{
		//Draw the "tv screen"
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //Draw the canvas background
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
		for (bulbe of bulbes) {
        //ctx.fillRect(bulbe.x, bulbe.y, bulbe.img.width * scale, bulbe.img.height * scale);
		bulbe.theta += bulbe.thetaSpeed;
        drawImageCenter(bulbe.img, bulbe.x, bulbe.y, bulbe.img.width/2, bulbe.img.height/2, bulbe.scale, bulbe.theta);
		ctx.setTransform(1,0,0,1,0,0); // which is much quicker than save and restore
        //Move the logo
        bulbe.x += bulbe.xSpeed;
        bulbe.y += bulbe.ySpeed;
		}
        //Check for collision
        checkHitBox();
        update();
    }, speed)
}

// same as above but cx and cy are the location of the point of rotation
// in image pixel coordinates
function drawImageCenter(image, x, y, cx, cy, scale, rotation){
    ctx.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    ctx.rotate(rotation);
    ctx.drawImage(image, -cx, -cy);
} 

//Check for border collision
function checkHitBox() {
	for (bulbe of bulbes) {
	    if (bulbe.x + bulbe.img.width * bulbe.scale / 2 >= canvas.width || bulbe.x <= 0 + bulbe.img.width * bulbe.scale / 2) {
			bulbe.xSpeed *= -1;
		}

		if (bulbe.y + bulbe.img.height * bulbe.scale / 2 >= canvas.height || bulbe.y <= 0 + bulbe.img.height * bulbe.scale / 2) {
			bulbe.ySpeed *= -1;
		}	
	}
}
