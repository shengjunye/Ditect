//Creació del objecte Persona
var Persona = function(nom, cognom, id, telefon){
    this.nom = nom; 
    this.cognom = cognom;
    this.id = id;
    this.telefon = telefon;
}


//Funció del botó
function genPersona(){
    var Agenda = [];
    var num = prompt("Quantes persones vols crear?");
    //Introdueixo persones en el array
    for(var i = 0; i < num; i++){
        this.id = (i+1);
        nom = prompt("Com es diu la persona numero " + (i+1) + "?")
        cognom = prompt("Quin és el seu cognom?")
        telefon = prompt("I el seu telefón?")
        Agenda[i] = new Persona(nom, cognom, id, telefon);
    }
    //Faig un string de les respostes
    var frase = "";
    for(var i = 0; i < Agenda.length; i++){
        frase = frase + "<p>Hola! Sóc " + Agenda[i].nom + Agenda[i].cognom +"i tinc el id: "+Agenda[i].id+". El meu num de telef és " + Agenda[i].telefon + ".</p>";
    }
    document.getElementById("prova").innerHTML = frase;
}