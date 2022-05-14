const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formData = new FormData(event.currentTarget);
  // formData.forEach((name, value) => {
  //   if (name === '' || value === '') {
  //     return alert('заповніть всі поля');
  //   }
  //   console.log('object :>> ', { name, value });
  //   return { name, value };
  // });

  const dataElement = event.currentTarget.elements;
  const email = dataElement.email.value;
  const password = dataElement.password.value;
  const data = { email, password };

  if (email === '' || password === '') {
    return alert('Заповніть всі поля!');
  }
  console.log(data);

  event.currentTarget.reset();
}
