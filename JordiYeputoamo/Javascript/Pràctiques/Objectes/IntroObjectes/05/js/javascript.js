//Creació del objecte Persona
var Persona = function(nom, edat, idioma){
    this.nom = nom; 
    this.edat = edat;
    this.idioma = idioma;

    //Funcio per a saludar
    this.saluda = function(){
        if(this.idioma == "Català"){
            alert("Hola sóc " + this.nom + " i tinc " + this.edat + " anys.");
        } else if(this.idioma == "Castellano"){
            alert("Hola soy " + this.nom + " i tengo " + this.edat + " años.");
        } else if(this.idioma == "English"){
            alert("Hi! I'm " + this.nom + " and I'm " + this.edat + " years old.");
        } else if(this.idioma == "Xines"){
            alert()
        } 
    }
}


//Saludar en català
function genSaludarcat(){
    var nom = prompt("Quin és el teu nom?");
    var edat = prompt("Quants anys tens?");
    var idioma = "Català";

    var personeta = new Persona(nom, edat, idioma);
    personeta.saluda();
}

//Saludar en Castellano
function genSaludarcas(){
    var nom = prompt("Cuàl es tu nombre?");
    var edat = prompt("Cuantós años tienes?");
    var idioma = "Castellano";

    var personeta = new Persona(nom, edat, idioma);
    personeta.saluda();
}

//Greeting in english
function genSaludareng(){
    var nom = prompt("What's your name?");
    var edat = prompt("How old are you?");
    var idioma = "English";

    var personeta = new Persona(nom, edat, idioma);
    personeta.saluda();
}

//Greeting in english
function genSaludareng(){
    var nom = prompt("你叫什麼名字？");
    var edat = prompt("你多大了？");
    var idioma = "Xines";

    var personeta = new Persona(nom, edat, idioma);
    personeta.saluda();
}


