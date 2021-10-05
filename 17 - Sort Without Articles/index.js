const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function sortWithoutArticles(a, b){
	const c = a.replace(/^(a |the |an )/i, '').trim();
	const d = b.replace(/^(a |the |an )/i, '').trim();
	
	return c < d ? -1 : 1;
}

bands.sort(sortWithoutArticles);

document.querySelector("#bands").innerHTML = bands.map(band => `<li>${band}</li>`).join('');

