(function() {
  const AUTH = document.forms?.auth;

  AUTH.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log({'LOGIN:': AUTH.login.value, 'PASSWORD:': AUTH.password.value});
  });
})();
