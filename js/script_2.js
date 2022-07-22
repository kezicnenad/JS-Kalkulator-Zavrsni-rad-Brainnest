const container = document.querySelector("body");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.textContent = "I'm blue h3!";

container.appendChild(paragraph);
container.appendChild(h3);

const div = document.createElement("div");
div.style.border = "black";
div.style.backgroundColor = "pink";

const div_container = document.querySelector("div");

const h1_inside = document.createElement("h1").appendChild(div);
h1_inside.textContent = "I'm in a div";

const p_inside = document.createElement("p").appendChild(div);
p_inside.textContent = "MEE TOO!";

div_container.appendChild(h1_inside);
div_container.appendChild(p_inside);
