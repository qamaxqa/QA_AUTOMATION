/*
1. 
  Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  Приклад:
*/

function map(fn, array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(fn(array[i]));
  }
  return result;
}

function square(x) {
  return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// Зверніть увагу: функція не повинна змінювати переданий їй масив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/*
  2. Написати функцію яка форматує текст: 
    - прибирає пробіли з початку і кінця, 
    - прибарає всі займі пробіли (два і більше підряд)
    - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими
*/
function formatText(text) {
  text = text.trim();
  text = text.replace(/ +/g, ' ').trim();
  text = text.toLowerCase();
  text = text.replace(/(^\w|\.\s+\w)/g, function(match) {
      return match.toUpperCase();
  });
  return text;
}

console.log(formatText("heLLo, this is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello world"

/*
    3. Написати функцію, яка поверне число голосних букв в строкі
*/

function countVowels(arr) {
  var Vowels = "aeiouAEIOU";
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Vowels.indexOf(arr[i]) !== -1) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("aaaat")); // виводить 4
console.log(countVowels("Hello world")); // виводить 3

/*
    4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
*/
function clearStr(str) {
  str = str.replace(/[^a-zA-Z0-9\s]/g, "");
  str = str.replace(/\s+/g, ' '); 
  str = str.trim();
  return str;
// хоча в умові вказано що пробіли залишаємо, але після консоль логу в коментарях я помітив, що немає зайвих пробілів, тому я вирішив спочатку замінити послідовні пробілів на один пробіл а потім видалити пробіли з початку і кінця речення
}

console.log(clearStr("My var: 22 ")); // виведе "My var 22"
console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"


