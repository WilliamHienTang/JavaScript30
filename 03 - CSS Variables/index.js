function handleUpdate(e){
	const suffix = this.dataset.sizing || '';
	const val = this.value + suffix;
	document.documentElement.style.setProperty(`--${this.name}`, val);
}

const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));