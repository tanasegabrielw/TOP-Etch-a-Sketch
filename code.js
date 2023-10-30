const pageContainer = document.querySelector(".container");
const btnGridSize = document.querySelector("#gridSizeBtn");
const btnGridReset = document.querySelector("#resetGridBtn");
const btnColor = document.querySelector("#color");
let cellNumber=16;
isDrawing = false;

function changeColor(event){

    if (isDrawing){
        event.target.classList.add("elementChanged");
    }

}
pageContainer.addEventListener("mousedown", ()=> {
    isDrawing = !isDrawing; // toggles drawing on and off
})

function createGrid(){

    pageContainer.innerHTML="";
    let numberOfCells = cellNumber * cellNumber;

    for (let i = 0; i <numberOfCells; i++) {

        let cellElement = document.createElement('div');
        cellElement.classList.add("gridElement");
        pageContainer.appendChild(cellElement);
        let borderOffSet = cellNumber*2; //removes the size of the border from the size of the cell
        cellElement.style.width = ((800-borderOffSet)/cellNumber) + "px";

        cellElement.addEventListener("mouseover", changeColor);
    }
}

btnGridSize.addEventListener("click",()=> {
cellNumber= prompt("How many cells?",cellNumber);

if (cellNumber>=50){
    alert("Max 50!");

}
else{
    createGrid();
} 
});

btnGridReset.addEventListener("click", ()=> {
createGrid();

});



