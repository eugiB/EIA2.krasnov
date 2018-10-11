/* Aufgabe: Aufgabe 0
Name: Eugen Krasnov
Matrikel: 259525
Datum: 05.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
function text() {
    var n = prompt("Wie lautet dein Name?");
    var node = document.getElementById("xD");
    node.innerHTML += "Hey ";
    node.innerHTML += n;
    node.innerHTML += " was geht?";
    console.log("Hey ", n, " was geht?");
}
document.addEventListener('DOMContentLoaded', text);
//# sourceMappingURL=aufgabe0.js.map