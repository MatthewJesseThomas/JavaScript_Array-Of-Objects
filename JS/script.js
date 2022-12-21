const information = [];

let submitBtn = document.querySelector('#submit');
let displayBtn = document.querySelector('#display');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.querySelector('#firstname').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#Email').value;
    let message = document.querySelector('.msg-box').value;

    information.push({
        name,
        surname,
        email,
        message
    })
    localStorage.setItem('data', JSON.stringify(information));
});

displayBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(
        JSON.parse(localStorage.getItem('data'))
    );
});
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const firstNameInput = document.getElementById('firstname');
    const surNameInput = document.getElementById('surname');
    const emailInput = document.getElementById('Email');
    const messageInput = document.getElementById('msg');
    
    firstNameInput.value = '';
    surNameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});