/* Aufgabe: Aufgabe 0
Name: Eugen Krasnov
Matrikel: 259525
Datum: 05.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var n = "";
function text1() {
    function text() {
        var n = prompt("Wie lautet dein Name?");
        var node = document.getElementById("xD");
        node.innerHTML += "Hey ";
        node.innerHTML += n;
        node.innerHTML += "Was geht?";
        console.log("Hey ", n, "Was geht?");
    }
    document.addEventListener('DOMContentLoaded', text1);
}
//# sourceMappingURL=aufgabe0.js.map