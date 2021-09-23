const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
	.then(header => header.json())
	.then(data => cities.push(...data));

function findMatches(wordToMatch){
	return cities.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(x) {
 	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function highlightSubstring(string, substring) {
	const regex = new RegExp(substring, 'gi');
	return string.replace(regex, `<span class="hl">${substring}</span>`);
}

function displayMatches(){
	const search_value = this.value;
	const match_array = findMatches(search_value);

	const html = match_array.map(place => {
		const city = highlightSubstring(place.city, search_value);
		const state = highlightSubstring(place.state, search_value);
		return `
	    <li>
          <span class="name">${city}, ${state}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
		`;
	}).join('');
	console.log(html);
	suggestions.innerHTML = html;
}

const search_input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search_input.addEventListener('change', displayMatches);
search_input.addEventListener('keyup', displayMatches);