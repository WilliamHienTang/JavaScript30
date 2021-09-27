const checkboxes = Array.from(document.querySelectorAll('.inbox .item input[type="checkbox"]'));
let lastChecked;

function handleCheck(e){
	if(e.shiftKey){
		const a = checkboxes.indexOf(this);
		const b = checkboxes.indexOf(lastChecked);
		for(let i=Math.min(a,b); i<Math.max(a,b); i++){
			checkboxes[i].checked = true;
		}
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

