// найти элемент используя сss селектор
let sayHelloBtn = document.querySelector("#say-hello");

//изменить свойства элемента (содержание, класс итд )
sayHelloBtn.textContent = "SAY HELLO";
sayHelloBtn.className = "btn";
sayHelloBtn.classList.add("btn", "btn-res"); //remove, toggle

//изменить стили элемента
sayHelloBtn.style.color = "tomato";
sayHelloBtn.style.fonySize = "20px";

// не-изменяемые свойства
console.log(sayHelloBtn.clientTop); //показывает сколько пиксиелей от начала страницы
console.log(sayHelloBtn.getClientRects());

//создание элемента
let exampleBtn = document.createElement("button");
document.body.append(exampleBtn);

//удаление элемента
exampleBtn.remove();

//добавление слушателя событий
sayHelloBtn.addEventListener(function (event) {
  alert("hello");
});
