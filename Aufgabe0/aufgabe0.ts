/* Aufgabe: Aufgabe 0
Name: Eugen Krasnov 
Matrikel: 259525
Datum: 05.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/



function text1() {
    var n = "";
    function text() {
        var n = prompt("Wie lautet dein Name?");
        var node = document.getElementById("xD");
        node.innerHTML += "Hey ";
        node.innerHTML += n;
        node.innerHTML += "What is love?";
        console.log("Hey ", n, "What is love?");
        }
    
        document.addEventListener('DOMContentLoaded', text1);
 }