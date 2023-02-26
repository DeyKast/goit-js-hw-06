const formEl = document.querySelector(".login-form");
let user = {};

formEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені !");
  } else {
    user = {
      email: email.value,
      password: password.value,
    };
    event.currentTarget.reset();
    console.log(user);
    alert("Ласкаво просимо !");
  }
}
