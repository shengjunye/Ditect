//Funcio general
function funcio_final(){
  nom = funcio_nom();
  cognoms = funcio_cognoms();
  email = funcio_email();
  passwd = funcio_passwd();
  condicions = condicions();
  if(nom && cognoms && email && passwd && condicions){
    alert("Camps validats!");
  }else{
    alert("Hi ha errors a formular!");
  }

}

//Funcio de funcions
function funcio_nom(){
  valid = false;
  nom = document.getElementById("name").value;
  if(nom.length != 0){//Validacio del nom
    valid = true;
  }else{
    document.getElementById("mname").innerHTML = "No deixis el camp buid!!";
  }
  return valid;
}
function funcio_cognoms(){//Validacio cognom
  valid = false;
  cognom = document.getElementById("Lastname").value;
  if(cognom.length != 0){
    valid = true;
  } else {
    document.getElementById("mLastname").innerHTML = "Aquest camp no pot estar buid"
  }
  return valid;
}
function funcio_email(){//Funcio del correu
  valid = false;
  email = document.getElementById("email").value;
  if(email.length != 0 && esmail(email)){
    valid = true;
  }
  return valid;
}
function esmail(mail1){//Confirmacio del correu
  valid = false;
  email = document.getElementById("esmail").value;//Confirmem que els 2 emails són iguals
  if(email.length != 0 && email == mail1){
    valid = true;
  }
  return valid;
}
function funcio_passwd(){//Validacio contrasenya
  valid = false;
  passwd = document.getElementById("fun_passwd").value;

  funpasswd(passwd);//Validador de contrasenyes
  if(passwd.length != 0 && espasswd(passwd)){
    valid = true;
  }
  return valid;
}

function espasswd(password){//Confirmació de la contrasenya
  valid = false;
  passwd = document.getElementById("espasswd").value;
  if(passwd.length != 0 && passwd == password){
    valid = true;
  }
  return valid;
}
function condicions(){//Checkbox
  valid = false;
  condicio = document.getElementById("Acceptar").value;
  if(condicio){
    valid = true;
  } else {
    document.getElementById("macceptar").innerHTML = "Has d'acceptar les condicions"
  }
  return valid;
}

//Funcio per a validar la contrasenya
function funpasswd(contrasenya) {
  if (contrasenya.length == 0) {
    document.getElementById("mpasswd").innerHTML = "El camp no pot estar buid!";
  }
  else if(contrasenya.length <= 5){
    document.getElementById("mpasswd").style.color = "red";
    document.getElementById("mpasswd").innerHTML = "Too Short";
  }else {
    var contsimb = 0, contnum = 0, contcaractMin = 0, contcaracMaj = 0, icarac;

    for(var i = 0; i<contrasenya.length; i++){
      icarac = contrasenya.charCodeAt(i);

      if(icarac >= 48 && icarac <=57){
        contnum++;

      }else if(icarac >= 65 && icarac <= 90){
        contcaracMaj++;

      }else if(icarac >= 97 && icarac <= 122){
        contcaractMin++;

      }else if((icarac >= 32 && icarac <= 47) || (icarac >= 58 && icarac <= 64) ||
              + (icarac >= 91 && icarac <= 96) || (icarac >= 123 && icarac <= 126)){
                contsimb++;
      }else{
        document.getElementById("mpasswd").innerHTML = "La contrasenya conté simbols no admessos";
      }
    }
    if ((contcaractMin > 10 && (contnum >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contnum > 10 && (contcaractMin >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contcaracMaj > 10 && (contnum >= 1 && contcaractMin >= 1 && contsimb >= 1)) ||
             + (contsimb > 10 && (contnum >= 1 && contcaracMaj >= 1 && contcaractMin >= 1))){
               document.getElementById("mpasswd").style.color = "purple"
               document.getElementById("mpasswd").innerHTML = "Awesome";
    } else if ((contcaractMin > 8 && (contnum >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contnum > 8 && (contcaractMin >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contcaracMaj > 8 && (contnum >= 1 && contcaractMin >= 1 && contsimb >= 1)) ||
             + (contsimb > 8 && (contnum >= 1 && contcaracMaj >= 1 && contcaractMin >= 1))) {
               document.getElementById("mpasswd").style.color = "blue";
               document.getElementById("mpasswd").innerHTML = "Very Strong";
    } else if ((contcaractMin > 5 && (contnum >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contnum > 5 && (contcaractMin >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contcaracMaj > 5 && (contnum >= 1 && contcaractMin >= 1 && contsimb >= 1)) ||
             + (contsimb > 5 && (contnum >= 1 && contcaracMaj >= 1 && contcaractMin >= 1))) {
               document.getElementById("mpasswd").style.color = "cian";
               document.getElementById("mpasswd").innerHTML = "Strong";
    } else if ((contcaractMin > 5 && (contnum>=1 && contcaracMaj>=1 || contnum>=1 && contsimb >= 1 || contcaracMaj>=1 && contsimb >= 1)) ||
             + (contnum > 5 && (contcaractMin>=1 && contcaracMaj >= 1 || contcaractMin>=1 && contsimb >= 1 || contcaracMaj>=1 && contsimb >= 1)) ||
             + (contcaracMaj > 5 && (contcaractMin>=1 && contnum >= 1 || contcaractMin>=1 && contsimb >= 1 || contnum>=1 && contsimb >= 1)) ||
             + (contsimb > 5 && (contcaractMin>=1 && contnum >= 1 || contcaractMin>=1 && contcaracMaj >= 1 || contnum>=1 && contcaracMaj >= 1))) {
               document.getElementById("mpasswd").style.color = "green";
               document.getElementById("mpasswd").innerHTML = "Good";
    } else if ((contcaractMin > 5 && (contnum >= 1 || contcaracMaj >= 1 || contsimb >= 1)) ||
             + (contnum > 5 && (contcaractMin >= 1 || contcaracMaj >= 1 || contsimb >= 1)) ||
             + (contcaracMaj > 5 && (contnum >= 1 || contcaractMin >= 1 || contsimb >= 1)) ||
             + (contsimb > 5 && (contnum >= 1 || contcaracMaj >= 1 || contcaractMin >= 1))) {
               document.getElementById("mpasswd").style.color = "orange";
               document.getElementById("mpasswd").innerHTML = "Weak";
    }else if ((contcaractMin > 5 && contnum == 0 && contcaracMaj == 0 && contsimb == 0) ||
      + (contcaractMin == 0 && contnum > 5 && contcaracMaj == 0 && contsimb == 0) ||
      + (contcaractMin == 0 && contnum == 0 && contcaracMaj > 5 && contsimb == 0) ||
      + (contcaractMin == 0 && contnum == 0 && contcaracMaj == 0 && contsimb > 5)) {
        document.getElementById("mpasswd").style.color = "brown";
        document.getElementById("mpasswd").innerHTML = "Very Weak";
    }

  }
}
