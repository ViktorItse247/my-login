const form = document.querySelector('.my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg')
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    paramse.preventDefault();
 } {
    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please enter values';

        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log(success)
    }
}

//const s = 'cups, books, tools, botles'
//console.log(s.split(', '));

//const S = 'Hello World'
//alert('hello world')