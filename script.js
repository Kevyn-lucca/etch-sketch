//content pulled from the page
const container = document.querySelector(".container");
const btn = document.querySelector("button");


//this function makes a trail that follows the mouse around
function MousePainter(div){
    div.addEventListener("mousemove", (e) => {
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
        div.appendChild(dot);
        
    });
    }

//this function generates random rgb numbers and applys them on the generated divs
    function ColorDiv(div){
        div.addEventListener("mousemove", (e) => {
        let num1 = Math.random() * 255
        let num2 = Math.random() * 255
        let num3 = Math.random() * 255
        div.style.backgroundColor = `rgb(${num1},${num2}, ${num3})`;
    });
    }


 //this buttom clears the canvas and calls generatDivs   
btn.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    generateDivs();
});


//this function generate new divs
function generateDivs() {
    let divSize = prompt("Enter the number of divs (up to 100): ");
    divSize = parseInt(divSize);
    if (isNaN(divSize) || divSize <= 0 || divSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    //this loop generates the required number of divs and adds the previuws functions to each
    for (let i = 0; i < divSize; i++) {
        let div = document.createElement("div");
        div.classList.add("div-sketch");
        container.appendChild(div);

        MousePainter(div)
        ColorDiv(div)
    }
}

// kisses from brasil