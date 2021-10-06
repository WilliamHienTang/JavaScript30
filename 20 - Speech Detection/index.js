window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector('.words');
let p;

function recognitionHandler(e){
	const transcript = Array.from(e.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('');

	if(e.results[0].isFinal){
		p = document.createElement('p');
		words.appendChild(p);
		p.textContent = transcript;
	}

	if(transcript.includes("weather")){
		console.log("The weather is...");
	}
}

recognition.addEventListener('result', recognitionHandler);
recognition.addEventListener('end', recognition.start);

recognition.start();