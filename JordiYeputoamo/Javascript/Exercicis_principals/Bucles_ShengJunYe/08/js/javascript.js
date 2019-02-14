numalea = Math.floor((Math.random()*10)+1);

a = prompt("Quin numero estic pensant?[1-,10]",numalea);

while(a!=numalea){

  if(a<numalea){
    alert("El numero que penso és més gran");
  }else{
    alert("El numero que penso és més petit");
  }
    a = prompt("Torna a provar amic",numalea);
}

alert("Enhorabona, ets un crac!");
