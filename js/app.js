const form = document.querySelector('.content__form')
const email = document.getElementById('email');
const iconError = document.querySelector('.input__error')
const labelError = document.querySelector('.label__error')
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

email.value = ''

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailRegex.test(email.value)) {
    email.value = ""
    email.style.outline = '0px'
    iconError.style.opacity = '0'
    labelError.style.opacity = '0' 
  } else {
    email.style.outline = '2px solid var(--soft-red)'
    iconError.style.opacity = '1'
    labelError.style.opacity = '1'
  }
})
