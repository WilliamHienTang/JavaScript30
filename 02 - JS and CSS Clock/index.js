const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

let setClock = () => {
	const date = new Date();
	const hourRotation = (date.getHours() * 30) % 360;
	const minRotation = (date.getMinutes() * 6) % 360;
	const secondRotation = (date.getSeconds() * 6) % 360;

	hourHand.style.transform = `rotate(${hourRotation}deg)`
	minHand.style.transform = `rotate(${minRotation}deg)`
	secondHand.style.transform = `rotate(${secondRotation}deg)`
};

setInterval(setClock, 1000);
setClock();