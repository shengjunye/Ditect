//Funció per a convertir les monedes
function conversor(){
    $.getJSON("http://data.fixer.io/api/latest?access_key=e811890ea697f98d53810327219e42d9", function(data){
        var euros = document.getElementById("import").value;
        console.log(euros);
        var moneda = document.getElementById("divises").value;
        console.log(moneda);
        var resultat = euros * data["rates"][moneda];
        console.log(resultat);
        resultat = resultat.toFixed(2);
        console.log(resultat);
        document.getElementById("total").value = resultat;
    });
}