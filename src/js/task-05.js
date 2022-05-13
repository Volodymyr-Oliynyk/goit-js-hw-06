const inputName = document.querySelector(
  '#name-input'
);

const outputName = document.querySelector(
  '#name-output'
);

const onInputChange = item => {
  if (inputName === '') {
    return (outputName.textContent = 'Anonymous');
  }
  return (outputName.textContent =
    item.currentTarget.value);
};

inputName.addEventListener(
  'input',
  onInputChange
);
