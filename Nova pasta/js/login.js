/*Codigo para ativar o botão*/
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

/*Criação da função de validação do preenchimento do nome no formulario*/
const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }
  button.setAttribute('disabled', '');
}
/*Criação da função para salvar as informações no browser*/
const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

/*Chamando as funções criadas anteriormente*/
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);