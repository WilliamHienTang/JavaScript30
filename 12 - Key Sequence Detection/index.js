const pressed = [];
const secretCode = 'buh';

function handlePress(e){
	pressed.push(e.key);
	pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);
	if(pressed.join('').includes(secretCode)){
		cornify_add();
	}
}

window.addEventListener('keyup', handlePress);