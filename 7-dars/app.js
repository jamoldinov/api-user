
const api = "https://jsonplaceholder.typicode.com/todos";
const listul = document.getElementById("list");

function expfun(completed = null) {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      listul.innerHTML = "";
      let filteredData = data;
      if (completed !== null) {
        filteredData = data.filter((ver) => ver.completed === completed);
      }
      filteredData.slice(0, 20).forEach((veri) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = `ID: ${veri.id}, Completed: ${veri.completed}, Title: ${veri.title}`;
        listul.appendChild(liElement);
      });
    })
    .catch((error) => console.log(error));
}

document.getElementById("la-one").addEventListener("click", () => {
  expfun(true);
});

document.getElementById("la-two").addEventListener("click", () => {
  expfun(false);
});

// document.getElementById("allButton").addEventListener("click", () => {
//   expfun(data);
// });
