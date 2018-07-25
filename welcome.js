
function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Gilbert");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Welcome " + person ;
    }
    document.getElementById("demo").innerHTML = txt;
}
