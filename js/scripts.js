const pswGeneratorElement = document.getElementById('psw-generator');
const lengthElement = document.getElementById('length');
const passwordRangeElement = document.getElementById('psw-range');
const spanSelector = document.querySelector('span');
const buttonGeneratorElement = document.getElementById('button-generator');

const allCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789º"·$%&/()=?¿¡Ç¨_:.,;';

let passwordLength = '18';

const setLenghtPassword = (event) => {
  passwordLength = event.target.value;
  spanSelector.textContent = passwordLength;
};

const printPassword = (password) => {
  passwordRangeElement.value = password;
};

const generatePassword = () => {
  let newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * allCharacters.length);

    const randomCharacter = allCharacters.charAt(randomNumber);

    newPassword += randomCharacter;
  }
  pswGeneratorElement.value = newPassword;
  printPassword(newPassword);
};

// Evento de range password
passwordRangeElement.addEventListener('input', setLenghtPassword);

// Evento de generate password button
buttonGeneratorElement.addEventListener('click', generatePassword);

// Evento de colocar password en input
