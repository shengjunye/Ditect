alert("Entra 3 numeros");
var num1 = parseInt(prompt("Numero 1: ", ''));
var num2 = parseInt(prompt("Numero 2: ", ''));
var num3 = parseInt(prompt("Numero 3: ", ''));

var tot = num1+num2+num3;
if(tot >= 10)
{
  document.write("Enhorabona!<br>Num: " + tot);
}
  else if (tot >= 5)
  {
    document.write("Ok!<br>Num: " + tot);
  }
  else
  {
    document.write("Oh no!<br>Num: " + tot);
  }
