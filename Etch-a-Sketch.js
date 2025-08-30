const container=document.querySelector(".container")
let paintColor="black"
gridSize=16 
let randomise=false


function destroyGrid(){
    const lines=document.querySelectorAll(".line")
    lines.forEach(ln => {
        container.removeChild(ln)
    })

}



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


document.body.addEventListener("click",(e)=>{

    switch(e.target.className){
        case "resetButton":
            document.querySelectorAll(".square").forEach(sq => {
                sq.style.backgroundColor="white"
            })
            break
        
        case "randomColorsButton":
            randomise=true
            break
        
        case "earaserButton":
            paintColor="white"
            randomise=false
            break

        case "defaultColorButton":
                randomise=false
                paintColor="black"
                break

        case "changeGridButton":

            const gridSizeInput=document.querySelector(".changeGridInput").value
            if(+gridSizeInput<=100 && +gridSizeInput>=1){
                gridSize=gridSizeInput
                destroyGrid()
                createGrid()
                }
            break
    }
})




container.addEventListener("mouseover",(e)=>{
    
    if(randomise)paintColor=`rgb(${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1})`
    e.target.style.backgroundColor=paintColor
})


createGrid()