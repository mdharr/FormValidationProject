const form = document.querySelector('#form')
const errorsDiv = document.querySelector('.errors')
const errorsList = document.querySelector('.errors-list')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const passwordConfirmationInput = document.querySelector('#password-confirmation')
const agreeToTermsInput = document.querySelector('#terms')

form.addEventListener('submit', e => {
    clearErrors()
    const errorMessages = [];
    if(usernameInput.value.length < 6) {
        errorMessages.push('Username must be at least 6 characters long')
    }
    if(passwordInput.value.length < 10) {
        errorMessages.push('Password must be at least 10 characters long')
    }
    if(passwordInput.value !== passwordConfirmationInput.value) {
        errorMessages.push('Passwords must match')
    }
    if(!agreeToTermsInput.checked) {
        errorMessages.push('You must accept the terms')
    }
    if(errorMessages.length > 0) {
        e.preventDefault()
        showErrors(errorMessages);
    }
})

function clearErrors() {
    while(errorsList.firstChild) {
        errorsList.removeChild(errorsList.firstChild)
    }
    errorsDiv.classList.remove('show')
}

function showErrors(errorMessages) {
    errorMessages.forEach(message => {
        let listItem = document.createElement('li')
        listItem.innerText = message
        errorsList.appendChild(listItem)
    });
    errorsDiv.classList.add('show')
}