//Creació del objecte Persona
var Persona = function(nom, edat, idioma){
    this.nom = nom; 
    this.edat = edat;
    this.idioma = idioma;

    //Funcio per a saludar
    this.saluda() = function() {
        if(this.idioma == "Català"){
            alert("Hola sóc " + this.nom + " i tinc " + this.edat + " anys.");
        } else if(this.idioma == "Castellano"){
            alert("Hola soy " + this.nom + " i tengo " + this.edat + " años.");
        } else if(this.idioma == "English"){
            alert("Hi! I'm " + this.nom + " and I'm " + this.edat + " years old.");
        }  
    }
}


//Saludar en català
function genSaludarcat(){
    nom = prompt("Quin és el teu nom?");
    edat = prompt("Quants anys tens?");
    idioma = "Català";

    var personeta = new Persona(nom, edat, idioma);
    personeta.saluda();
}

//Saludar en Castellano
function genSaludarcas(){
    nom = prompt("Cuàl es tu nombre?");
    edat = prompt("Cuantós años tienes?");
    idioma = "Castellano";

    var personeta = new Persona(nom, edat, idioma);
    personeta.saluda();
}

//Greeting in english
function genSaludareng(){
    nom = prompt("What's your name?");
    edat = prompt("How old are you?");
    idioma = "English";

    var personeta = new Persona(nom, edat, idioma);
    personeta.saluda();
}