const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value;
  const userPassword = event.currentTarget.elements.password.value;

  if (userEmail.trim() === '' || userPassword.trim() === '') {
    return alert('All form fields must be filled in');
  }

  const userDatabase = {
    email: userEmail,
    password: userPassword,
  };

  console.log(userDatabase);
  loginForm.reset();
}
