let username = document.querySelector('#username');
const pin = document.querySelector('#pin');
const states = document.querySelector('#states');
const btn = document.querySelector('button');
const checkbox = document.querySelector('#testMe');
const p = document.querySelector('p');
btn.addEventListener('click', () => {
	username = username.value;
	if (username.length <= 5 || username.length >= 9) {
		p.innerText = 'username should be 6 - 8 ';
	}
	if (!isAlphanumeric(pin.value) || pin.value === '') {
		p.innerText += ' pin should be alpha numeric ';
	}
	if (states.value === '') {
		p.innerText += ' states should be selected ';
	}
	if (checkbox.checked) {
		p.innerText += ' checked';
	} else {
		p.innerText += ' unchecked';
	}
});

const isAlphanumeric = (text) => {
	return /^[a-zA-Z0-9]+$/.test(text);
};
