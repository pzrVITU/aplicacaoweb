/*Ciração das funçoes*/
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

/*String usada para inserir imagens no face "back" da carta*/
const characters = [
  'Imagem_1',
  'Imagem_2',
  'Imagem_3',
  'Imagem_4',
  'Imagem_5',
  'Imagem_6',
  'Imagem_7',
  'Imagem_8',
  'Imagem_9',
  'Imagem_10',
];

/* Função para criar um elemento passado atraves da tag */
const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

/*Variavel para guardar as cartas viradas*/
let firstCard = '';
let secondCard = '';

/*Verificação se as cartas são iguais*/
const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
  }
}

/*Função para checar as cartas viradas*/
const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');
/*Validação se o usuario acertou a carta*/
  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    /*Tempo que a carta errada vai ficar virada*/
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}
/*Criação da função para revelar a carta*/
const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }
/*Permite que a carta virada nao tenha mais nenhuma interação*/
  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}
/*Definindo para o JS criar nosso HTML*/
const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

/*Definindo as imagens da frente da carta*/

  front.style.backgroundImage = `url('../imagen/${character}.jpg')`;

/*Inserindo div, dentro da div*/
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
/*Atributo para verificar se as cartas são iguais*/
  card.setAttribute('data-character', character)

  return card;
}
/*Função para carregar nosso jogo (criar) e duplicar cartas*/
const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

/*Função para carregar o tempo de jogo*/
const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}
/*Mensagem informando o resultado*/
window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}