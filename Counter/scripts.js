const n = document.querySelector("#n")
const incBtn = document.querySelector("#inc")
const decBtn = document.querySelector("#dec")
const rBtn = document.querySelector("#r")

let count = 0

n.textContent = count

incBtn.addEventListener("click", () => {
    count++
    n.textContent = count
    addClass()
})

decBtn.addEventListener("click", () => {
    count--
    n.textContent = count
    addClass()
})
rBtn.addEventListener("click", () => {
    count = 0
    n.textContent = count
    addClass()
})
function addClass() {
    if (count == 0) {
        n.className = ""
    } else if (count > 0) {
        n.className = ""
        n.classList.add("positive")
    } else {
        n.className = ""
        n.classList.add("negative")
    }
}