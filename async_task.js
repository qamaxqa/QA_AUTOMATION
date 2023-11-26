/* 1. Створити модуль api_helper.js, в якому будуть реалізовані функції посилання get та post запитів
та десеріалізація респонсу у json об'єкт, який вони будуть повертати (при реалізації поста зверніть увагу на хедери, 
які вказані у інструкції під блоком Post with JSON). Для створення запитів використати пакет
node-fetch, інструкця по використанню тут https://www.npmjs.com/package/node-fetch?activeTab=readme, для 
реалізації асинхронності використати async/await */

import * as request from "./api_helper/api_helper.js";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
// Приклад використання GET
const getData = async () => {
  const data = await request.get(baseUrl);
  console.log(data);
};

// Приклад використання POST
const postData = async () => {
  const newData = {
    title: "sub1",
    body: "sub2",
    userId: 1,
  };

  const result = await request.post(baseUrl, newData);
  console.log(result);
};

getData();
postData();

/* 2. Реалізувати функцію getPostsByUsedId, яка буде знаходити пости з ресурсу https://jsonplaceholder.typicode.com/posts та робити 
вибірку постів за id користувача. Також у всіх відфільтрованих постів повинна бути відсутня властивість title */

async function getPostsByUserId(url, userId) {
    try {
      // Отримуємо всі пости
      const allPosts = await request.get(url);
  
      // Зберігаємо пости для заданого userId і видаляємо властивість title
      const modifiedPosts = allPosts
        .filter((post) => post.userId === userId)
        .map((post) => {
          delete post.title;
          return post;
        });
  
      return modifiedPosts;
    } catch (error) {
      console.error('Error during getPostsByUserId:', error);
      throw error;
    }
  }
  
  const posts = await getPostsByUserId(baseUrl, 5);
  console.log(posts); // маємо тільки пости юзера з id = 5, у яких нема title

/* 3. Реалізувати функцію createNewPost, яка буде створювати новий пост на ресурсі https://jsonplaceholder.typicode.com/posts */
const body = {
  userId: 155,
  title: "New title",
  body: "New body",
};
async function createNewPost(url, body) {
  try {
    const result = await request.post(url, body);
    return result;
  } catch (error) {
    console.error('Error during createNewPost:', error);
    throw error;
  }
}

const result = await createNewPost(baseUrl, body);
console.log(result); // повинен буди респонс у вигляді { userId: 155, title: 'New title', body: 'New body', id: 101 }

/* 4. Використовуючи синтаксис промісів створити функцію, яка генерує рандомне число від 0 до 10 та з затримкою в 3 секунди
резолвить проміс з результатом "Resolved <число>" у випадку, якщо число більше 5ти, або повертає reject з 
результатом "Rejected <число>", якщо число меньше 5ти. Reject обробити через catch. */

function resolveNumber() {
  return new Promise((resolve, reject) => {
    const randomDelay = Math.floor(Math.random() * 3000); // Генеруємо випадковий часовий інтервал в межах 3 секунд
    const randomNumber = Math.floor(Math.random() * 11); // Генеруємо випадкове число від 0 до 10

    setTimeout(() => {
      if (randomNumber > 5) {
        resolve(`Resolved ${randomNumber}`);
      } else {
        reject(`Rejected ${randomNumber}`);
      }
    }, randomDelay);
  });
}

resolveNumber()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));//далі обробка промісу, в консолі або, наприклад, Resolved 7, або Rejected 2 (в залежності від рандомно створенного числа)
