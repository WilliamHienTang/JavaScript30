const timeNodes = Array.from(document.querySelectorAll('li[data-time]'));

function sumReducer(sum, value){
	return sum+value;
}

let seconds = timeNodes
	.map(node => node.dataset.time)
	.map(timeCode => {
		const [mins, secs] = timeCode.split(':').map(parseFloat);
		return mins*60 + secs;
	})
	.reduce(sumReducer);

const hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;

const minutes = Math.floor(seconds / 60);
seconds = seconds % 60;


console.log([hours, minutes, seconds].join(':'));