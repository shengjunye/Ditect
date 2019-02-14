a = +prompt("Valor A","5");
b = +prompt("Valor B","2");
while(a>b){
  alert("Amic, el valor B ha de ser més gran que el valor A.");
  a = +prompt("Torna a introduir un valor A","1");
  b = +prompt("Torna a introduir un valor B","100");
}

for(;a<=b;a++){
  document.write(a+"<br>");
}
