// Import stylesheets

// Запросы, XMLHttpRequest, AJAX. Домашняя работа

//* Задание №1.1.
//* Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
//* Используйте fetch или ajax. Отобразите на странице имена персонажей из
//* Рика и Морти в list.
//* let block1 = $('.block1');
//* let list = $('.list');
//* (Вы можете стилизовать страницу по желанию.)

//* Задание №1.2.
//* Рядом с именами отобразите все изображения
//* которые вы получили вместе с остальными данными из сервера.

let list = document.querySelector(".list");
let block1 = document.querySelector(".block1");
const API = "https://rickandmortyapi.com/api/character";
const API2 = "http://localhost:6666/characters";
let list2 = document.querySelector(".list2");

let db = [];

async function add() {
    let a = await fetch(API);
    let data = await a.json();
    let b = data.results;
    // console.log(b);
    list.innerHtml = "";
    b.forEach((item) => {
        list.innerHTML += `
    <li>${item.name}</li>
    <img src="${item.image}" style="width: 300px; height:300px">
    `;
        db.push({ name: item.name, image: item.image });
    });
}
add();
// console.log(db);

//* Задание №1.3.
//* Создайте файл db.json и запустите локальный сервер.
//* Данные которые вы получили во втором задании, сохраните
//* в локальном сервере db.json, в массиве под
//* названием "characters".
//* Подсказка: как только ваши данные сохранились в db.json
//* функцию, которая отправляет запрос на db.json стоит закомментировать.

// let btn1 = document.querySelector(".btn1");
// async function myFunc(e) {
//     for (let item of db) {
//         await fetch("http://localhost:8001/characters", {
//             method: "POST",
//             body: JSON.stringify(item),
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//             },
//         });
//     }
// }
// btn1.addEventListener("click", myFunc);

//* Задание №1.4.
//* А теперь сделайте запрос на локальный сервер.
//* Во второй блок с классом 'block-2', отобразите имена, которые
//* вы получили (стянули) с db.json.

//* Задание №1.5.
//* К именам добавьте картинки персонажей.
//* В итоге у вас должна получиться точная копия первых двух тасков.
//* Отличие которых лишь в базе данных.

async function addToPage() {
    let a = await fetch("http://localhost:8001/characters");
    let data = await a.json();
    list2.innerHtml = "";
    data.forEach((item) => {
        list2.innerHTML += `
    <li>${item.name}</li>
    <img src="${item.image}" style="width: 300px; height:300px">
    `;
    });
}
addToPage();
