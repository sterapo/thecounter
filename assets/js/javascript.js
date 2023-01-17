
function counterCreation(tag, id, text) {
  element = document.createElement(tag);
  element.id = id;
  element.innerHTML = text;
  return element;
}
document.body.innerHTML = "<h1>The counter:</h1>";

const container = counterCreation('div', 'container', '');
document.body.append(container);

const counterValue = counterCreation('div', 'counter', '0');
container.append(counterValue);

const buttonContainer = counterCreation('div', 'button-container', '');
container.append(buttonContainer);

const decreaseButton = counterCreation('button', 'decrease', '-');
buttonContainer.append(decreaseButton);

const resetButton = counterCreation('button', 'reset', 'Reset');
buttonContainer.append(resetButton);

const increaseButton = counterCreation('button', 'increase', '+');
buttonContainer.append(increaseButton);

let count = 0;

buttonContainer.addEventListener('click', (event) => {
  const target = event.target;

  switch (target.id) {
    case 'decrease':
      if (count <= 0) {
        count--;
        counterValue.style.color = '#EF3A4C';
        } 
      else
        count--;
      break;
    case 'increase':
      if (count >= -1){
        counterValue.style.color = '#1B2033';
        count++;}
      else {
        counterValue.style.color = '#EF3A4C';
        count++;
      }
      break;
    case 'reset':
        count = 0;
        break;
  }
  counterValue.innerHTML = count;
});
