const grid = document.querySelector('.grid');

const characters = [
    'aizen',
    'grimmjow',
    'kenpachi',
    'byakuya',
    'ichigo',
    'rukia',
    'toshiro',
    'ulquiorra',
    'urahara',
    'hariable'
];

const createElement = (tag, className) => {
    // criando elementos html
    const element = document.createElement(tag);

    // adicionando as classes css
    element.className = className;

    return element;
}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    // montando o elemento card
    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame()