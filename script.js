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
//sayHelloBtn.addEventListener(function (event) {
// alert("Hello");
//});

//ЗАДАЧА 1
// СОЗДАТЬ КНОПКУ КОТОРАЯ СОДЕРЖИТ ТЕКСТ EXAMPLE И ДОБАВИТЬ В BODY, СДЕЛАТЬ ТАК ЧТОБЫ ПРИ НАЖАТИ КНОПКИ ОНО ИСЧЕЗАЛО
let button = document.createElement("button");
button.textContent = "example";
document.body.append(button);
button.addEventListener("click", function () {
  button.remove();
});

//ЗАДАЧА 2
// СОЗДАТЬ UL И ДОБАВИТЬ В BODY И ДОБАВИТЬ 10 LI ИЗ МАССИВА
let list = ["apples", "pears", "oranges", "peachers"];
let ul = document.createElement("ul");
document.body.append(ul);
for (let i = 0; i < list.length; i++) {
  let item = document.createElement("li");
  item.textContent = list[i];
  ul.append(item);
}
