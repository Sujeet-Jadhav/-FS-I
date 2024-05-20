function changePage(link){
    var ele = document.getElementById("IFrame");

    console.log(link);
    console.log(ele.src);
    if(link=="Hindi"){
        ele.src="http://127.0.0.1:5500/MovieInfoSys/hindi/info1.html";
    }
    else if(link=="English")
    {
        ele.src="http://127.0.0.1:5500/MovieInfoSys/english/info1.html"
    }
    else if(link=="Marathi")
    {
        ele.src="http://127.0.0.1:5500/MovieInfoSys/marathi/info1.html"
    }
    else if(link=="Others")
    {
        ele.src="http://127.0.0.1:5500/MovieInfoSys/other/info1.html"
    }
}


var colorText = document.getElementById('colorText');

// Define an array of colors
var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#ffa500', '#008000', '#800080'];

// Define a function to change the color of the text
function changeColor() {
    // Generate a random index to select a color from the array
    var randomIndex = Math.floor(Math.random() * colors.length);
    
    // Set the color of the text to the randomly selected color
    colorText.style.color = colors[randomIndex];
}


setInterval(changeColor, 800); 