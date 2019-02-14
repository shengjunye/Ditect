var frase = "pretium vestibulum dictum erat volutpat est ante blandit ut urna vel laoreet iaculis est porta suscipit blandit non consequat nisl a tincidunt tortor luctus ante et risus convallis posuere fringilla massa quis tellus molestie vel hendrerit augue congue at porttitor ligula dignissim libero a elementum iaculis quam nisi condimentum ipsum volutpat eu urna id mattis quis placerat lacus augue quis felis"
var ipsum = []
ipsum = frase.split(" ");

var paragraf = prompt("Quants paragrafs vols que t'escrigui?", 3);
var paraules = prompt("Quantes paraules vols que sigui cada paragraf?", 20);
for(n = 0; n<paragraf; n++){
  document.write("<p>");
  for(i = 0; i<paraules;i++){
    numalea = Math.floor(Math.random() * ipsum.length);
    document.write(ipsum[numalea]);
    (i!=paraules-1)? document.write(" ") : document.write(".</p>");
  }

}
