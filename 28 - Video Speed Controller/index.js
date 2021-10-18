const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const min = Number(bar.getAttribute("min"));
const max = Number(bar.getAttribute("max"));
const barHeight = speed.offsetHeight;
const barTop = speed.offsetTop;
const barBottom = barTop + barHeight;
let isDown;

function handleMouseDown(){
	isDown = true;
}

function handleMouseUp(){
	isDown = false;
}

function changePlaybackRate(e){
	if(isDown && e.pageY >= barTop && e.pageY <= barBottom){
		const y = e.pageY - barTop;
		const percent = y / barHeight;
		const height = Math.round(percent * 100) + '%';
		const playbackRate = percent * (max - min) + min;
		bar.style.height = height;
		bar.textContent = playbackRate.toFixed(1) + '×';
		video.playbackRate = playbackRate;
	}
}

speed.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('mousemove', changePlaybackRate);