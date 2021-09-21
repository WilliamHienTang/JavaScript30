function toggleOpen() {
	this.classList.add('freeze');
	this.classList.toggle('open');
}

function toggleOpenActive(e) {
	if(e.propertyName.includes('flex')){
		this.classList.toggle('open-active');
	}
	this.classList.remove('freeze');
}

const panels = document.querySelectorAll('.panel');
panels.forEach(p => p.addEventListener('click', toggleOpen));
panels.forEach(p => p.addEventListener('transitionend', toggleOpenActive));