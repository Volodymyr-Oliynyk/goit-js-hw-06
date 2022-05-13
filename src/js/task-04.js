const value = document.querySelector('#value');
console.log(value);
let counterValue = 0;
console.log(counterValue);
const counterValuePlus = document.querySelector('[data-action="increment"]')
console.log(counterValuePlus);
const counterValueMinus = document.querySelector('[data-action="decrement"]');
console.log(counterValueMinus);


counterValueMinus.addEventListener("click", () => {
    console.log('click')
});

// button.addEventListener("click", handleClick);
