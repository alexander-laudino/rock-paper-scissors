const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey I'm red";
para.style.color = "red";
container.appendChild(para);

const head3 = document.createElement("h3");
head3.textContent = "I'm a blue h3!";
head3.style.color = "  blue";
container.appendChild(head3);

const head1 = document.createElement("h1");
head1.textContent = "I'm in a div";
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

const containerDiv = document.createElement("div");
containerDiv.style.border = "2px solid black";
containerDiv.style.backgroundColor = "pink";

containerDiv.appendChild(head1);
containerDiv.appendChild(para2);
container.appendChild(containerDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("div button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
