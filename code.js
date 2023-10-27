const pageContainer = document.querySelector(".container");
isDrawing = false;

function changeColor(event){

    if (isDrawing){
        event.target.classList.add("elementChanged");
    }

}
pageContainer.addEventListener("click", ()=> {
    isDrawing = !isDrawing;
})

for (let i = 0; i < 16; i++) {

    let gridDivColumn = document.createElement('div');
    pageContainer.appendChild(gridDivColumn);


    for (let j=0;j<16;j++){

        let gridDivRow = document.createElement('div');
        gridDivRow.classList.add("gridElement");
        gridDivColumn.appendChild(gridDivRow);

        gridDivRow.addEventListener("mouseover", changeColor);
    }
}





