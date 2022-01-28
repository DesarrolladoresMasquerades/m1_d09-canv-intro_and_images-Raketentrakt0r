/*const canvas = document.querySelector("canvas");

canvas.width = 500 // canvas.width = document.innerWidth
canvas.height = 300

const ctx = canvas.getContext("2d")

//squares 
ctx.fillStyle = "rgba(255,0,0,0.5)" // Para el estilo "color"  "rgb(255,0,0,0)"
ctx.fillRect(100,100,300,100) // cuadro con todas sus dimenciones

ctx.fillStyle = "skyblue"
ctx.fillRect( 400, 100, 100, 100)

ctx.fillStyle = "yellow"
ctx.fillRect( 300, 300, 100, 100)

//line
ctx.beginPath();
ctx.moveTo(50,300)
ctx.lineTo(300,100)
ctx.lineTo(400,300)
ctx.strokeStyle = "black" // gives the color to the line
ctx.stroke()
*/
// arc  / Circle

//ctx.beginPath()
//ctx.arc(300,300,30,0,Math.PI * 2, false)
//ctx.stroke()

//ctx.beginPath()
//ctx.arc(400,500,30,0,Math.PI * 2, false)
//ctx.strokeStyle = "green"
//ctx.stroke()
 
// create several circles with a loop for
/*for (let i = 0; i < 88; i++){
let x = Math.random() * canvas.width
let y = Math.random() * canvas.height
     
    ctx.beginPath()
    ctx.arc(x,y,30,0,Math.PI * 2, false)
    ctx.strokeStyle = "green"
    ctx.stroke()
}

*/

const canvas = document.querySelector("canvas");

canvas.width = 500 // canvas.width = document.innerWidth
canvas.height = 300

const ctx = canvas.getContext("2d")

ctx.fillStyle = "rgba(210, 181, 0)" 
ctx.fillRect(0,0,800,300)

//rectngulo derecho
ctx.fillStyle = "rgba(255,0,0,0.5)" 
ctx.fillRect(0,120,100,60)

//rectangulo izquierdo
ctx.fillStyle = "rgba(255,0,0,0.5)" 
ctx.fillRect(400,120,100,60)

//area de tiro

ctx.beginPath();
ctx.moveTo(0,100)
ctx.lineTo(100,100)
ctx.strokeStyle = "black" 
ctx.stroke()

ctx.beginPath();
ctx.moveTo(0,200)
ctx.lineTo(100,200)
ctx.strokeStyle = "black" 
ctx.stroke()

ctx.begin();
ctx.moveTo(250,0)
ctx.lineTo(250,300)
ctx.strokeStyle = "black"
ctx.stroke()




    




