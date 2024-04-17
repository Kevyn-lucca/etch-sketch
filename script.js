const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    clearDivs();
    generateDivs();
});

function clearDivs() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function generateDivs() {
    let divSize = prompt("Enter the number of divs (up to 100): ");
    divSize = parseInt(divSize);
    if (isNaN(divSize) || divSize <= 0 || divSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    for (let i = 0; i < divSize; i++) {
        let div = document.createElement("div"); // Create a new div each time
        div.classList.add("div-sketch");
        container.appendChild(div);

        // Add mousemove event listener to each div
        div.addEventListener("mousemove", (e) => {
            const mouseX = e.offsetX;
            const mouseY = e.offsetY;
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
            div.appendChild(dot); // Adiciona o ponto à div atual
            
        });
    }
}
