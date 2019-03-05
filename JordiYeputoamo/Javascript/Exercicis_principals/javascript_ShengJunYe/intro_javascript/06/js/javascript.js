alert("Saludos viajero!");
var nom = prompt("Quin és el teu nom?", "");

while(nom == "")
{
  nom = prompt("Tros de sóca, entra un nom", "");
}

var cognoms = prompt("I els teus cognoms?", "");
document.write(nom + " " + cognoms);
