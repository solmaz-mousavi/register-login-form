const registerTitle = document.getElementById('register-title')
const loginTitle = document.getElementById('login-title')
const loginForm = document.getElementById('login-container')
console.log(registerTitle)
console.log(loginTitle)
console.log(loginForm)


const loginFormHandler = () => loginForm.style.top = '100px'
const registerFormHandler = () => loginForm.style.top = '380px'



loginTitle.addEventListener('click', loginFormHandler)
registerTitle.addEventListener('click', registerFormHandler)


