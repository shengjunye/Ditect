noms = ["Maria", "Marta", "Gabriel", "Raúl", "Josep", "Joan", "Jan", "Rubén", "Martí", "Pol"];

for(n=0; n<noms.length; n++){
  document.write(noms[n] + "<br>");
}
document.write("<br>");
noms.pop();

for(n=0; n<noms.length; n++){
  document.write(noms[n] + "<br>");
}
