var nom = prompt("Com et dius?","Joan Carles Pere II");
var edat = parseInt(prompt("Quants anys tens?",''));
document.write("Hola "+nom+"!");

if(edat < 18){
  alert("ETS MENOR!!!!");
}else{
  document.write("<br>Ets major d'edat!")
}
