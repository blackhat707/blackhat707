var string = "Meet the FUTURE, Face the PAST";
var i = 0;
function typeWriter() {
    if (i < string.length ) {
        var sen1 = document.getElementById("sen1");
        sen1.innerHTML += string.charAt(i);
        i++;
        if(string.charAt(i-1) == ",")
            setTimeout(typeWriter, 500);
        else
            setTimeout(typeWriter, 50);
    }
}