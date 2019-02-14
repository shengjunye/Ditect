var Persona = function(nom, cognom, edat){
    this.nom = nom; 
    this.cognom = cognom;
    this.edat = edat;

}

var PrimeraPersona = new Persona("Marta", " López", "24");

document.getElementById("prova").innerHTML = "<p>Hola! Sóc " + PrimeraPersona.nom + PrimeraPersona.cognom +" i tinc " + PrimeraPersona.edat + " anys.</p>";

var Persona = function(nom, cognom, edat){
    this.nom = nom; 
    this.cognom = cognom;
    this.edat = edat;

}

var PrimeraPersona2 = new Persona("Manel", " Garcia", "18");

document.getElementById("prova2").innerHTML = "<p>Hola! Sóc " + PrimeraPersona2.nom + PrimeraPersona2.cognom +" i tinc " + PrimeraPersona2.edat + " anys.</p>";

var Persona = function(nom, cognom, edat){
    this.nom = nom; 
    this.cognom = cognom;
    this.edat = edat;

}

var PrimeraPersona3 = new Persona("Joana", " Marfany", "35");

document.getElementById("prova3").innerHTML = "<p>Hola! Sóc " + PrimeraPersona3.nom + PrimeraPersona3.cognom +" i tinc " + PrimeraPersona3.edat + " anys.</p>";

