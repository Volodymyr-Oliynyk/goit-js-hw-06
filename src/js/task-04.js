const value = document.querySelector('#value');
console.log(value);

let counterValue = 0;
console.log(counterValue);

const counterValueMinus = document.querySelector('[data-action="decrement"]');
console.log(counterValueMinus);

const counterValuePlus = document.querySelector('[data-action="increment"]')
console.log(counterValuePlus);

counterValuePlus.addEventListener('click', () => {
    counterValue +=1; 
    updateCounterValue();
})

counterValueMinus.addEventListener("click", () => {
    counterValue -=1;
    updateCounterValue();
 
});

function updateCounterValue(){
    value.textContent = counterValue;
}


