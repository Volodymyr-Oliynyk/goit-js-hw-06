const сharactersInput = document.querySelector('#validation-input');

const inputCheck = event => {
  const inputDataLenght = parseInt(
    event.currentTarget.getAttribute('data-length')
  );

  if (event.currentTarget.value.length === inputDataLenght) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
};

сharactersInput.addEventListener('blur', inputCheck);
