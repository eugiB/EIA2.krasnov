/* Aufgabe: Aufgabe 0
Name: Eugen Krasnov 
Matrikel: 259525
Datum: 05.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/


    function text() {
        var n:string = prompt ("Wie lautet dein Name?");
        var node: HTMLElement = document.getElementById("xD");
        node.innerHTML += "Hey ";
        node.innerHTML += n;
        node.innerHTML += " was geht?";
        console.log("Hey ", n , " was geht?");
>>>>>>> branch 'master' of https://github.com/eugiB/EIA2.krasnov/
        }
    
        document.addEventListener('DOMContentLoaded', text);
