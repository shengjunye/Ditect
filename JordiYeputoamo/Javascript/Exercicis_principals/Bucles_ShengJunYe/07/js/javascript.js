alert("Anem a sumar fins a 50!");
tot = 0;
do{
  a = +prompt("Entra un numero a sumar","49");
  tot = parseInt(tot+a);
  if(tot<50){
      alert("portes acumulat:"+tot);
  } else {
    alert("Ja has arribat als 50. Punts acumulats:"+tot);
  }
}while(tot<50);
