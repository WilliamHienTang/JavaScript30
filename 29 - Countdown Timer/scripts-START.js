const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
let countdown;

function timer(seconds){
	clearInterval(countdown);

	const now = Date.now();
	const then = now + seconds * 1000;
	displayEndTime(then);
	displayTimeLeft(seconds);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		if(secondsLeft <= 0){
			clearInterval(countdown);
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(totalSeconds){
	const hours = Math.floor(totalSeconds / 3600);
	const hoursPad = getTimePad(hours);
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const minutesPad = getTimePad(minutes);
	const seconds = totalSeconds % 60;
	const secondsPad = getTimePad(seconds);
	const display = `${hoursPad+hours}:${minutesPad+minutes}:${secondsPad+seconds}`;
	timerDisplay.textContent = display;
	document.title = display;
}

function displayEndTime(timestamp){
	const end = new Date(timestamp);
	const hour = end.getHours();
	const adjustedHour = hour > 12 ? hour - 12 : hour;
	const period = hour > 12 ? 'pm' : 'am'
	const minutes = end.getMinutes();
	const minutesPad = getTimePad(minutes);
	endTime.textContent = `Be Back At ${adjustedHour}:${minutesPad+minutes+period}`;
}

function getTimePad(time){
	return time < 10 ? '0' : '';
}

function startTimer(){
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

function customTimer(e){
	e.preventDefault();
	const minutes = this.minutes.value;
	if(!isNaN(minutes)){
		timer(minutes * 60);
	}
	this.reset();
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', customTimer);