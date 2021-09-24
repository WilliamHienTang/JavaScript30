const canvas = document.querySelector('canvas#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function startDrawing(e){
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing(){
	isDrawing = false;
}

function draw(e){
	if(isDrawing){
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		[lastX, lastY] = [e.offsetX, e.offsetY];

		hue++;
		if(hue >= 360){
			hue = 0;
		}

		if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
			direction = !direction;
		}

		if(direction){
			ctx.lineWidth++;
		}
		else{
			ctx.lineWidth--;
		}
	}
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('mousemove', draw);