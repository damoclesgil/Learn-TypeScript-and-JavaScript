const clogDefault = "color: #ff79c6; font-weight: bold; font-size: 2rem";
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/todos"
];

const getData = async function() {
  try {
    const [users, todos, albums] = await Promise.all(
      urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log("users", users);
    console.log("albums", albums);
    console.log("todos", todos);
  } catch (err) {
    console.log("ooops", err);
  }
};

// console.log("%c Mensagem:" + sum(...array), clogDefault);

const elementPurificador = document.querySelector(".classe");
const button = document.querySelector(".btn");
let URL = window.location.href;

// elementPurificador.innerHTML = URL;
button.addEventListener("click", () => {
  getData();

  // console.log("%c" + event, clogDefault);
});
