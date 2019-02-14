var fruites = new Array();
var fruita = prompt("Quina fruita vols introduir?");

while(fruita != "stop"){
  fruites.push(fruita);
  fruita = prompt("Quina fruita vols introduir?");
}
alert("stop no és una fruita");

document.write("Fruites introduïdes: <br>")
for(n = 0; n<fruites.length;n++){
  document.write(fruites[n] + "<br>");
}
