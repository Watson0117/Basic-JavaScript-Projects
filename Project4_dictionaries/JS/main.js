

function my_Dictionary() {// I used the example that was in the lesson
    var Animal = {
        Species: "Dog",
        Color: "Blue",
        Breed: "Lab",
        Age:5,
        Sound:"Bork!!!"//The sound all dogs make lol.
    };
    delete Animal.Sound
    document.getElementById("sp").innerHTML = "The animal is a  " + Animal.Species;
    //I added the species part to see what would happen. It changes bolth when clicked
    //Strange as i thought id have to click on each Part individuly.
    document.getElementById("so").innerHTML = "The animal goes  " + Animal.Sound;
}




//var X = 5;
//X++;
//document.write (X);