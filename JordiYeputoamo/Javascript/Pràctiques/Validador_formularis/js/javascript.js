//Funcio general
function funcio_final(){
  nom = funcio_nom();
  cognoms = funcio_cognoms();
  email = funcio_email();
  confemail = esmail();
  passwd = funpasswd();
  confpasswd = Confirm_passwd();
  condicions = condicions();
  if(nom && cognoms && email && confemail && passwd && confpasswd && condicions){
    alert("Camps validats!");
  }else{
    alert("Hi ha errors a formular!");
  }

}

//Funcio de funcions
function funcio_nom(){
  valid = false;
  nom = document.getElementsByClassName("name").value;
  if(nom != ""){
    valid = true;
  }else{
    document.getElementById("mname").innerHTML = "caca de vaca";
  }
  return valid;
}
function funcio_cognoms(){
  valid = false;
  cognom = document.getElementsByClassName("Lastname").value;
  if(nom != ""){
    valid = true;
  }
  return valid;
}
function funcio_email(){
  valid = false;

  return valid;
}
function esmail(){
  valid = false;

  return valid;
}
function funpasswd(){
  valid = false;

  return valid;

}
function Confirm_psswd(){
  valid = false;

  return valid;
}
function condicions(){
  valid = false;

  return valid;
}
