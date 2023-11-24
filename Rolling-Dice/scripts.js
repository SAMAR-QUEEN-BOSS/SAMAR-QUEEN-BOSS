const nR = document.querySelector("#nR");
const rBtn = document.querySelector("#rBtn");
const rl = document.querySelector("#rl");

function rollDice() {
    nR.textContent = "Rolling 🎲..";
    setTimeout(() => {
    const rolled = Math.floor(Math.random() * 6 + 1);
    nR.textContent = "You rolled: " + rolled;
    addNToL(rolled);
}, 2000);
}
let nList = [];
function addNToL(s) {
    nList.push(s);
    rl.textContent = "Rolling history: " + nList.join(", ");
}
rBtn.addEventListener("click", rollDice);
