//var SP = "<br>"//This line is left over from the document.write exercises i needed something to space stuff out to make it more readable.
alert(document.getElementById("p1").innerHTML);

function sliceM() {
    var Sen = "All work and no play makes Johnny a dull boy.";
    var Sec = Sen.slice(27, 33);//The slice works by only dosplaying the text that has been sliced out of the string 
    //based on the perameiters set in parenthesies after it. in this case it returnes "Johnny"
    document.getElementById("Slice").innerHTML = Sec;
}