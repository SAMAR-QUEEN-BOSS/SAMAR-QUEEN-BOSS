const content = document.querySelector("#content");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");
div.appendChild(h1);
div.appendChild(p);
content.appendChild(div);
h1.textContent ="WoW";
p.textContent ="yeh";