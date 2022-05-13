// const сharactersInput = document.querySelector('#validation-input');

// сharactersInput.addEventListener('blur', onInputBlur);

// function onInputBlur(event){

// if(event.currentTarget.value === ParseInt(сharactersInput.dataset.length)){
//   return  event.currentTarget.classList.add('valid');
  
// }
//     return event.currentTarget.classList.add('invalid');
//  }

const сharactersInput = document.querySelector("#validation-input");
const inputDataLenght = parseInt(сharactersInput.getAttribute("data-length"));

const inputCheck = (event) => {
  if (event.currentTarget.value.length === inputDataLenght) {
    сharactersInput.classList.add("valid");
    сharactersInput.classList.remove("invalid");
  } else {
    сharactersInput.classList.add("invalid");
    сharactersInput.classList.remove("valid");
  }
};

сharactersInput.addEventListener("blur", inputCheck);
