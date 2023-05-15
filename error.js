const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('word');

const h2 = document.querySelector('h2');
h2.innerText = `${myParam} is not present in the applicatio. Please try another word `;