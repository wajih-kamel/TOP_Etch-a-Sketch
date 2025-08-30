const container=document.querySelector(".container")
let paintColor="black"
gridSize=16 




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




container.addEventListener("mouseover",(e)=>{
    
    if(randomise)paintColor=`rgb(${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1})`
    e.target.style.backgroundColor=paintColor
})


createGrid()