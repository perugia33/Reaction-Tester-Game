let startTime =    Math.round(new Date().getTime() )
// calculate start time as soon as page loads

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]




function getHexCharacter(index){
    let randomIndex = Math.floor(Math.random() * hexCharacters.length)
    return hexCharacters[randomIndex]
}

function generateRandomColour(){
    let randomColor = "#" ;
    for( let i = 0;  i  < 6; i ++){
           
            randomColor  +=  getHexCharacter() ;
    }
    return randomColor;


}

function objectAppears(){
    let firstColor = generateRandomColour()
    document.getElementById("circle1").style.backgroundColor = firstColor

    document.getElementById("circle1").style.display = "block"
    // update to starttime

    let top = Math.random() * 15
    // set the top attribute to a random number
    document.getElementById("circle1").style.top = top + "em"
    startTime = Math.round(new Date().getTime() /1000)

    let left = Math.random() * 35;
    document.getElementById("circle1").style.left = left + "em"

    const minCircleWidth = 3;
    let circleWidth =  Math.max(Math.random() * 16, minCircleWidth)
    // setting a minimum width
    document.getElementById("circle1").style.width = circleWidth + "em"

    document.getElementById("circle1").style.height = circleWidth+ "em"

    let newColor = generateRandomColour()
    document.getElementById("circle1").style.backgroundColor = newColor

}

function timeoutHelperFunc (){
    setTimeout(objectAppears, Math.random() * 2000);
    // set time intevals for object to reapper to a random number
}



timeoutHelperFunc();
document.getElementById("circle1").onclick = function () {
 endTime =  Math.round(new Date().getTime()/ 1000 )  
document.getElementById("circle1").style.display = "none"

reactTime =  (endTime - startTime) ;
    // update texy with users reaction time
    document.getElementById("reactTime").innerHTML = reactTime + "  second(s)"
    timeoutHelperFunc();
}