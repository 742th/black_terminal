const ROOT = document.querySelector('body');
const AUTH = document.forms.auth;

AUTH.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('LOGIN:', document.forms.auth.login.value);
  console.log('PASSWORD:', document.forms.auth.password.value);
})
