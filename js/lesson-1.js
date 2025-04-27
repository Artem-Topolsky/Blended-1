'use strict';

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// let number = prompt("Введите число!");
// number = Number(number);
// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }


// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"


// const min = parseInt(prompt("Введите время"))
// if (min >= 0 && min < 15) {
//     alert(`Перша`);
// }
// else if (min >= 15 && min < 30) {
//      alert(`Друга`);
// }
// else if (min >= 30 && min < 45) {
//      alert(`Третя`);
// }
// else if (min >= 45 && min <= 59) {
//     alert(`Четверта`);
// }
// else {
//      alert(`Не правильно`)
    
// }



// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt("Введіть число від 1 до 4:");
// let result;

// if (num === '1') {
//   result = alert('зима');
// } else if (num === '2') {
//   result = alert('весна');
// } else if (num === '3') {
//   result = alert('літо');
// } else if (num === '4') {
//   result = alert('осінь');
// } else {
//   result = alert('Вибачте, але ви маєте ввести значення від 1 до 4 включно');
// }



// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function time(min) {
//     alert(String(min).padStart(2, "0"));

// }



// function time() {
//     const timeIn = prompt("Введите количество минут");
//     const userInput = parseInt(timeIn);
//     const hours = Math.floor(userInput / 60) % 24;
//     const minutes = userInput % 60;

//     if (userInput >= 0) {
//        const formatTime = alert(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);
//         console.log(formatTime);
//     } else {
//         alert("Пожалуйста, введите корректное положительное число.");
//     }
// }

// time();


// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     a = Number(a);
//     b = Number(b);

//     if (isNaN(a) || isNaN(b)) {
//         return 'Not a number!';
//     } else {
//         return a < b ? a : b;
//     }
// }

// console.log(min(10, 9));

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// function checkNumber() {
//     const input = prompt("Введите любое число от 0 до 60");
//     if (input === null) {
//         return;  // Если пользователь нажал "Отмена", ничего не делаем.
//     }

//     const min = Number(input);
//     if (isNaN(min) || min < 0 || min > 60) {
//         return alert("Неверное значение!");
//     }

//     if (min < 15) {
//         alert("Первая четверть");
//     }
//     else if (min < 30) {
//         alert("Вторая четверть");
//     }
//     else if (min < 45) {
//         alert("Третья четверть");
//     }
//     else {
//         alert("Четвертая четверть");
//     }
// }
// checkNumber();



// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.



// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else {
//             console.log(i); 
//         }
//     }
// }

// fizzBuzz(421);

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         console.log(
//             i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz' : 
//             i % 3 === 0 ? 'fizz' : 
//             i % 5 === 0 ? 'buzz' : i
//         );
//     }
// }

// fizzBuzz(15);

// function fizzBuzzy(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
//         result.push(
//             i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz' :
//             i % 3 === 0 ? 'fizz' :
//             i % 5 === 0 ? 'buzz' : i
//         );
//     }
//     return result.join('\n');  // Возвращаем строку, где элементы разделены новой строкой
// }

// console.log(fizzBuzzy(15));

// function fizzBuz(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push('fizzbuzz');
//         } else if (i % 3 === 0) {
//             result.push('fizz');
//         } else if (i % 5 === 0) {
//             result.push('buzz');
//         } else {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log(fizzBuz(15));


// function isAdult(age) {
//     if (age >= 18) {
//         return true;  // Якщо вік більше або рівно 18, повертаємо true
//     } else {
//         return confirm("Вам менше 18 років. Ви підтверджуєте, що маєте дозвіл на доступ?");
//     }
// }

// // Приклад виклику функції
// console.log(isAdult(20)); // поверне true
// console.log(isAdult(16)); //


