const hour_hand = document.querySelector('.hour-hand');
const min_hand = document.querySelector('.min-hand');
const second_hand = document.querySelector('.second-hand');

let setClock = () => {
	const date = new Date();
	const hour_rotation = (date.getHours() * 30) % 360;
	const min_rotation = (date.getMinutes() * 6) % 360;
	const second_rotation = (date.getSeconds() * 6) % 360;

	hour_hand.style.transform = `rotate(${hour_rotation}deg)`
	min_hand.style.transform = `rotate(${min_rotation}deg)`
	second_hand.style.transform = `rotate(${second_rotation}deg)`
};

setInterval(setClock, 1000);
setClock();