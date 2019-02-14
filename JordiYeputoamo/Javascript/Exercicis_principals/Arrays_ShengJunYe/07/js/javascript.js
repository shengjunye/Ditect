var fruites = new Array(),fruita;
var vector = ["Poma", "Pera", "Platan", "Maduixa", "Coco"];
for(n=0;n<5;n++){
  fruita = prompt("Quina fruita vols introduir?", vector[n]);
  fruites.push(fruita);
}
document.write("Fruites introduïdes: <br>")
for(n = 0; n<fruites.length;n++){
  document.write(fruites[n] + "<br>");
}
