const t = ["s", "a", "m", "a", "r"] 
        const target = document.querySelector("#target")
        const button = document.querySelector("button")
        button.addEventListener("click", () => {
            const randomNumber = Math.floor(Math.random() * (t.length - 0) + 0)
            target.textContent = t[randomNumber]
        })
