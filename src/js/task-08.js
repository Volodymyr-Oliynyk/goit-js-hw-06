const form = document.querySelector(
  '.login-form'
);
console.log(form);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(
    event.currentTarget
  );

  formData.forEach((name, value) => {
    if (name === '' || value === '') {
      return alert('заповніть всі поля');
    }
    console.log('object :>> ', { name, value });
    return { name, value };
  });

  event.currentTarget.reset();
}
