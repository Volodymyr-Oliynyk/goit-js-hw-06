const value = document.querySelector('#value');

let counterValue = 0;

const counterValueMinus = document.querySelector(
  '[data-action="decrement"]'
);

const counterValuePlus = document.querySelector(
  '[data-action="increment"]'
);

counterValuePlus.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

counterValueMinus.addEventListener(
  'click',
  () => {
    counterValue -= 1;
    updateCounterValue();
  }
);

function updateCounterValue() {
  value.textContent = counterValue;
}
