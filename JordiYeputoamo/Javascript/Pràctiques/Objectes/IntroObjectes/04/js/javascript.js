var circumferencia = function(radi){
    this.radi = radi;
    
    //Metodes de la circumferencia
    this.area = function(){
        var a = Math.PI * Math.pow(this.radi,2);
        alert("Area del cercle: " + a);
    }
    this.perimetre = function(){
        var p = 2 * Math.PI * this.radi;
        alert("Perimetre del cercle: " + p);
    }
}


//funcio del botó
function genCercle(){
    var cercle = new circumferencia(5);
    cercle.area();
    cercle.perimetre();
}

	
