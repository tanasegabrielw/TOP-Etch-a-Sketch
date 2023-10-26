const pageContainer = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add("gridElement");
    pageContainer.appendChild(gridDiv);
}


