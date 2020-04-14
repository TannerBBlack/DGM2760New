document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText ="'This IZ Chief Inspector Clouseau speaking on the pheaun'"

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`

    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}` 
}

let myURL = document.getElementById("url").textContent = document.URL;
var lastModified = document.lastModified;
var docTitle = document.title;
let myDocument = document.querySelector('#myDocument').innerText = `Document title is: ${docTitle} \n Document Last modified: ${lastModified}`
reDisplay()