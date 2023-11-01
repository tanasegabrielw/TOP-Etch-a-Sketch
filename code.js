const pageContainer = document.querySelector(".container");
let cellNumber=16;
isDrawing = false;
//buttons
const btnGridSize = document.querySelector("#gridSizeBtn");
const btnGridReset = document.querySelector("#resetGridBtn");
const cellNumberInput = document.querySelector("#cellNumberInput");
// Color picker
let colorPicker;
let currentColor = "#0000ff";
window.addEventListener("load", startup, false);
window.addEventListener("load", createGrid,false);

function startup(event) {
colorPicker=document.querySelector("#color");
colorPicker.value=currentColor; //initial color
colorPicker.addEventListener("input",updateColor,false);
}

function updateColor(event) {
//update currentColor when it changes value
    currentColor=event.target.value;
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
        cellElement.style.width = ((640-borderOffSet)/cellNumber) + "px";

        cellElement.addEventListener("mouseover", ()=>{
            if(isDrawing){
                cellElement.style.backgroundColor = currentColor;
            }


        });
    }
}

btnGridSize.addEventListener("click",()=> {
    cellNumber= parseInt(cellNumberInput.value);
    createGrid();   
});

btnGridReset.addEventListener("click", ()=> {
createGrid();

});



