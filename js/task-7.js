'use strict'

    
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (allLogins, login) {
    if (login.length >= 4 && login.length <= 16) {
      isLoginUnique(allLogins, login);
    } else {
      return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    }
  };

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login)) {
      console.log("Такой логин уже используется!");
    } else {
      logins.push(login);
      console.log("Логин успешно добавлен!");
    }
  };

const addLogin = function (allLogins, login) {
  isLoginValid(allLogins, login);
};



console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));