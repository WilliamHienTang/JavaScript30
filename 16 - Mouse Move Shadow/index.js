const hero = document.querySelector('.hero');
const heroText = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e){
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y } = e;

	if(e.target !== hero){
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = (x / width * walk) - (walk / 2);
	const yWalk = (y / height * walk) - (walk / 2);

	heroText.style.textShadow = `
		${xWalk}px ${yWalk}px 0 rgb(255, 0, 0, 0.7),
		${xWalk*-1}px ${yWalk}px 0 rgb(0, 255, 0, 0.7),
		${xWalk}px ${yWalk*-1}px 0 rgb(0, 0, 255, 0.7)
	`;
}

hero.addEventListener('mousemove', shadow);