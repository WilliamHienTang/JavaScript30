let playDrum = (e) => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if(audio){
		playAudio(audio);
	}

	if(key){
		playTransition(key);
	}
};

let playAudio = (audio) => {
	audio.currentTime = 0;
	audio.play();
};

let playTransition = (key) => {
	key.classList.add('playing');
};

let endTransition = (e) => {
	e.srcElement.classList.remove('playing');
}

window.addEventListener('keydown', playDrum);

const keys = document.getElementsByClassName('key');
for(let key of keys){
	key.addEventListener('transitionend', endTransition);
}