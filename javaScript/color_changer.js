//Grab the header with h1
var header= document.querySelector("h1")
header.style.color= 'red';

//random color generator function
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//simple function for clarity
function changeHeaderColor(){
  colorInput=getRandomColor()
  header.style.color=colorInput;
}

//Now perform the action in milisecondsinterval
setInterval("changeHeaderColor()",500);