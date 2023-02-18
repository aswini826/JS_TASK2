//Create list of 10 colors in an array
const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "brown", "grey", "black"];
let colorCount={};
//Change background color randomly
function changeBackgroundColor() {
  //take random color in colors array
    let randomOrder= Math.floor(Math.random() * colors.length);
    let randomColor=colors[randomOrder];
    document.body.style.backgroundColor=randomColor;
   //Count of each color shown in the background
    if (colorCount[randomColor]) {
        colorCount[randomColor] += 1;
      } else {
        colorCount[randomColor] = 1;
      }
      console.log(colorCount);
}