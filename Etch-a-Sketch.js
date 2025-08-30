function createGrid(){
    for( i=0;i<gridSize;i++){

        const line=document.createElement("div")
        line.classList.add("line")

        for (j=0;j<gridSize;j++){
            const square=document.createElement("div");
            square.classList.add("square")
            line.appendChild(square)
        }
        
        container.appendChild(line)
    }
}

createGrid()