//var SP = "<br>"//This line is left over from the document.write exercises i needed something to space stuff out to make it more readable.

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);//means that the program is pausing for 1,000 milliseconds, 1 second.
        if (seconds == -1) {
            alert("Times up!!!")//oddly the timer keeps going into negativ numbers after clicking away the alert.
        }
    }
    tick();
}


//This was a weird issue i typed out all the code in the CSS/JS. and HTML files adt it still wouldent work i spent about an hours re reading the code for each several times
// it still dident work so i resorted to copying and pasting each part into seperat files individualy to get it to work and still no dice. at this point i dont get what was 
//wrong. in the debug menu it says that showSlide was undefined. it dosent show up in the hTML in one spot and it only shows up in one place in the CSS so i know it has to 
//be an error in the CSS or the HTML. so i look over all the code agian and cant find anythin wrong. and then it hit me i forgot to add the CSS file i had the whole line 
//correct i just forgot to put in the file path for the css file. and because it was in the top buryed in a comment i dident notice it at first.

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";// i think this makes it so nothing is displayed untill one of the dots is clicked on.
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");// this chooses wich dot is active after clicking.
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}