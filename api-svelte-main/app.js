const txtCharacter = document.getElementById('txt-character');
const containerCards = document.getElementById('containerCards');
const URL1 = "https://rickandmortyapi.com/api/character"
const URL2 = "https://rickandmortyapi.com/api/character/?name="

const getApi = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();

    return data.results;
}

const createCards = (character) => {
    const card = document.createElement('div');
    card.classList.add('card-character');

    const imgCard = document.createElement('img');

    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerdescrition = document.createElement('div');
    containerdescrition.classList.add('descrition-card');

    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = "Gender:" + character.gender;

    containerdescrition.appendChild(nameCharacter);
    containerdescrition.appendChild(genderCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerdescrition);

    containerCards.appendChild(card);


}

const generateALLCharacters = async () => {
    const data = await getApi(URL1);
    data.map(character => createCards(character));

}

const getCharactebyName = async () => {
    containerCards.innerHTML = "";
    const data = await getApi(URL2 + event.target.value);
    data.map(character => createCards(character));
}

window.addEventListener('DOMContentLoaded', generateALLCharacters);
txtCharacter.addEventListener('keyup', getCharactebyName);
