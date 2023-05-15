const wordsDb = {
	sequel: 'subsequent event',
	Adulation: 'Excessive Battery',
	Fun: 'enjoy',
};

const words = {};

const wordToSearch = document.querySelector('#txtWord');
const sTable = document.querySelector('#searchedWordsTable');
const sButton = document.querySelector('#searchBtn');
const allWordsTable = document.querySelector('#allWords');

const showWord = (word, translation) => {
	sTable.innerHTML = `<tr>
                    <th>Word</th>
                    <th>Transaltion</th>
                    <th>Action</th>
                </tr>`;
	sTable.innerHTML += `<tr> 
<td>${word}</td>
<td>${translation}</td>
<td><a onClick="addToMyWords('${word}','${translation}')" class="btn btn-success">Add to My Words </a>
`;
};

const showAllWords = () => {
	allWordsTable.innerHTML = `<tr>
                    <th>Word</th>
                    <th>Translation</th>
                </tr>`;
	for (let word in words) {
		allWordsTable.innerHTML += `
        <tr><td>${word}</td><td>${words[word]}</td></tr>
        `;
	}
};

const addToMyWords = (word, translation) => {
	words[word] = translation;
	showAllWords();
};
sButton.addEventListener('click', () => {
	for (let word in wordsDb) {
		if (wordToSearch.value.toLowerCase() === word.toLowerCase()) {
			showWord(word, wordsDb[word]);
			return;
		}
	}
	window.location =`http://127.0.0.1:5500/Hackathon/error.html?word=${wordToSearch.value}`;
});
