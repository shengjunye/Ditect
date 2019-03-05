/*
definim una classe cotxe, però ara és diferent a l'anterior, ja que
la classe en si mateixa no te valors per defecte (a part del status).
Al crear una instancia de la classe serà quan donem els valors als sus atributs.
A més, té una funció que "engega el cotxe".
*/
var cotxe = function (marca, model, color) { //classe
  this.marca = marca; //això son les seves propietats, aquí no estan definides fins que no creem l'objecte.
  this.model = model;
  this.color = color;
  this.status = "apagat";

  this.engegar = function() { //això son els seus mètodes. No s'engegarà fins que no cridem aquesta funció.
    this.status = "engegat";
  }
}

//instanciem un objecte de la casse cotxe. Això és un objecte!
var elmeucotxe = new cotxe("Ford", "Fiesta", "Gris");

//l'imprimim
document.getElementById("cotxe_inicial").innerHTML = "<p>Hem creat un cotxe: "+elmeucotxe.marca+" "+elmeucotxe.model+" "+elmeucotxe.color+" i està "+elmeucotxe.status+"</p>";

//ara cridarem el mètode que l'engega.
elmeucotxe.engegar();

//i l'imprimim
document.getElementById("cotxe_final").innerHTML = "<p>Hem engegat el cotxe i: "+elmeucotxe.marca+" "+elmeucotxe.model+" "+elmeucotxe.color+" ara està "+elmeucotxe.status+"</p>";

//podem crear tants cotxes (objectes) com vulguem:
var cotxe_esportiu = new cotxe("Ferrari", "F50", "Vermell");
var cotxe_furgoneta = new cotxe("Renault", "Kangoo", "Blanc");
var cotxe_rally = new cotxe("Subaru", "Impreza", "Blau");

//podem engengar els que vulguem...
cotxe_esportiu.engegar(); //només vull engegar el ferrari.

//Ara ho mostrem per la consola del navegador.
console.log(cotxe_esportiu);
console.log(cotxe_furgoneta);
console.log(cotxe_rally);

//FIXA'T MOLT BÉ  COMS ES MOSTREN EN LA CONSOLA! SERÀ IMPORTANT QUAN TREBALLEM AMB ARXIUS JSON (PER EXEMPLE).

alert("Mira la consola! Hem creat més cotxes i els pots veure allà!") //avís per a despistats.
