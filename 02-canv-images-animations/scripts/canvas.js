console.log("Js Loaded")

const canvas = document.getElementById("canvas")

const getWindowWidth = () => window.innerWidth * 0.6
const getWindowHeigth = () =>  window.innerHeight * 0.6


const resizeCanvasToWindow = () =>{
    canvas.width = getWindowWidth()
    canvas.height = getWindowHeigth()
} 

resizeCanvasToWindow()

const ctx = canvas.getContext("2d")


const sillyRectangle = {
    "ctx": ctx,
    draw(){
        this.ctx.fillRect(canvas.width/2, canvas.height/2,(canvas.width/2) -50, (canvas.height/2) -50)
    }
}

/*
window.addEventListener(
    "resize",
    ()=> {
        resizeCanvasToWindow();
        sillyRectangle.draw()
    }
)
*/


// Sigue el Mouse con una linea
// with window.addEventListener( la linea sigue al mouse fuera del rectangulo
canvas.addEventListener(
    "mousemove",
    (event) => {
        console.log("mouse coordinates: ", event.clientX, event.clientY)
        ctx.clearRect(0,0, canvas.width, canvas.height)
        //ctx.beginPath() // comentando estas lineas hace el lapis y pinta lineas
        //ctx.moveTo(0,0)  //  comentando estas lineas hace el lapis y pinta lineas
        ctx.lineTo(event.clientX, event.clientY)
        ctx.stroke()
        //ctx.closePath() // comentando estas lineas hace el lapis y pinta lineas
    } 
)
