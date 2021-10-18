const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function handleMouseDown(e){
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
}

function handleMouseUp(){
	isDown = false;
	slider.classList.remove('active');
}

function scrollSlider(e){
	if(isDown){
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = x - startX;
		slider.scrollLeft = scrollLeft - walk;
	}
}

slider.addEventListener('mousedown', handleMouseDown);

slider.addEventListener('mouseup', handleMouseUp);

slider.addEventListener('mouseleave', handleMouseUp);

slider.addEventListener('mousemove', scrollSlider);