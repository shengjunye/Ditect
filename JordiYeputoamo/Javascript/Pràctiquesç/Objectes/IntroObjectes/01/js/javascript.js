var Persona = function(nom, cognom, edat){
    this.nom = nom; 
    this.cognom = cognom;
    this.edat = edat;

}

var PrimeraPersona = new Persona("Marta", "López", "24");

document.getElementById("prova").innerHTML = "<p>Hola! Sóc " + PrimeraPersona.nom + PrimeraPersona.cognom +" i tinc " + PrimeraPersona.edat + " anys.</p>";