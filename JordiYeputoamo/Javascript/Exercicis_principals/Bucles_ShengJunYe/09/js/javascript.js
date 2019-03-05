MAXOPORTUNITATS = 10;
rang = 10, encerts = 0, oportunitats = MAXOPORTUNITATS;
numalea = Math.floor((Math.random()*rang)+1);

a = prompt("Quin numero estic pensant?[1," +rang +"], tens "+oportunitats+" intents",numalea);


while(encerts<5 && oportunitats > 1){
  if(a == numalea){
    alert("Correcte amic! Anem a incrementar el rang de numeros (+20)");
    rang = rang + 20;
    numalea = Math.floor((Math.random()*rang)+1);
    a = prompt("Quin numero estic pensant ara?[1,"+rang+"], tens "+oportunitats+" intents",numalea);
    encerts++;
  }else if(a<numalea){
    oportunitats--;
    a = prompt("El numero que penso és més gran, tens "+oportunitats+" intents",numalea);

  }else{
    oportunitats--;
    a = prompt("El numero que penso és més petit, tens "+oportunitats+" intents",numalea);

  }

}

if(oportunitats == MAXOPORTUNITATS){
  alert("Enhorabona, ets un crac! No has fallat cap!");
}else if(oportunitats > 5){
  alert("Ho has fet bastant bé!");
}else if(oportunitats > 0){
  alert("Ho podries haver fet millor amic");
} else{
  alert("Ets un fracassat, no serveixes ni per pelar mandarines");
}
