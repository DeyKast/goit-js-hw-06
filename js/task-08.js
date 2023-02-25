const formEl = document.querySelector(".login-form");
let User = {};

formEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені !");
  } else {
    User = {
      email: email.value,
      password: password.value,
    };
    event.currentTarget.reset();
    console.log(User);
    alert("Ласкаво просимо !");
  }
}
