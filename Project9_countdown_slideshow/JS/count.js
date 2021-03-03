//var SP = "<br>"//This line is left over from the document.write exercises i needed something to space stuff out to make it more readable.
function countit() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("count").innerHTML = Digit;
}
