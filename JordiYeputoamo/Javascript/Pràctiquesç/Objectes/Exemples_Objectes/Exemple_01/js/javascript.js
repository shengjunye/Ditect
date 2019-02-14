var cotxe = { //aquí definim un objecte amb les propietats marca, model i color.
  marca: "Ford",
  model: "Fiesta",
  color: "gris",
}

//escrivim les seves propietats a una div del document.
document.getElementById('cotxes').innerHTML = "<p>"+cotxe.marca+" "+cotxe.model+" "+cotxe.color+"</p>";
