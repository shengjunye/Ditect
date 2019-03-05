var poblacions = new Array(), ciutats = ["Mataró", "Granollers", "Barcelona", "Sabadell", "Tortosa", "Badalona", "Matrorell", "Blanes", "Vic","Manresa"];
var poblacio, numeros = new Array(9,1,5,7,2,3,55,78,96,32,15,35);
for(n = 0; n<10; n++){
  poblacio = prompt("Introdueix una poblacio", ciutats[n]);
  poblacions[n] = poblacio;
  numeros[n] = (n+1);
}
poblacions.sort();
document.write("Ciutats: <br>")
for(n = 0; n<poblacions.length;n++){
  document.write(poblacions[n] + "<br>");
}

numeros.sort();
document.write("<br>"+numeros);
