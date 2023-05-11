const main = document.querySelector('#main');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg')

main.addEventListener('submit', onSubmit);

function onSubmit(e) {
    paramse.preventDefault();
 } {
    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please enter value';

        setTimeout(() => msg.remove(), 3000)
    } else {
        console.log(success)
    }
}