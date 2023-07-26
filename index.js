// let arr = [];

const container = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/posts", {
  headers: { "Content-Type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((post) => getPosts(post));

function getPosts(arr) {
  container.innerHTML = "";
  arr.forEach((item) => {
    createTemplate(item);
  });
}

function createTemplate(item) {
  const { title, body } = item;
  const template = `
  <h2>${title}</h2>
  <p>${body}</p>
  `;
  const div = document.createElement("div");
  div.innerHTML = template;
  container.appendChild(div);
}
