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

	for (i = 0; i < Math.ceil(8 + Math.random()*4); i++) {
		var xPosRandom = Math.random()-0.5;
		var yPosRandom = Math.random()-0.5;
		var xSpeedRandom = (Math.random()-0.5) * 10;
		var ySpeedRandom = (Math.random()-0.5) * 10;
		var thetaSpeedRandom = (Math.random()-0.5)*0.15;
		bulbes.push(
			{
				x: Math.floor(window.innerWidth/2 + (window.innerWidth-500)/2*xPosRandom),
				y: Math.floor(window.innerHeight/2 + (window.innerHeight-500)/2*yPosRandom),
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
			bulbe.thetaSpeed *= -Math.sign(bulbe.x - canvas.width/2)*Math.sign(bulbe.ySpeed)*Math.sign(bulbe.thetaSpeed);
		}

		if (bulbe.y + bulbe.img.height * bulbe.scale / 2 >= canvas.height || bulbe.y <= 0 + bulbe.img.height * bulbe.scale / 2) {
			bulbe.ySpeed *= -1;
			bulbe.thetaSpeed *= Math.sign(bulbe.y - canvas.height/2)*Math.sign(bulbe.xSpeed)*Math.sign(bulbe.thetaSpeed);
		}	
	}
}
