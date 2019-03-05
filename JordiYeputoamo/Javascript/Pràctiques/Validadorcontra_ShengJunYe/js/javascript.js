function funpasswd() {
  var contrasenya = document.getElementById("passwd").value;
  if (contrasenya.length == 0) {
    document.getElementById("message").innerHTML = "";
  }
  else if(contrasenya.length <= 5){
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "Too Short";
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
        document.getElementById("message").innerHTML = "La contrasenya conté simbols no admessos";
      }
    }
    if ((contcaractMin > 10 && (contnum >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contnum > 10 && (contcaractMin >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contcaracMaj > 10 && (contnum >= 1 && contcaractMin >= 1 && contsimb >= 1)) ||
             + (contsimb > 10 && (contnum >= 1 && contcaracMaj >= 1 && contcaractMin >= 1))){
               document.getElementById("message").style.color = "purple"
               document.getElementById("message").innerHTML = "Awesome";
    } else if ((contcaractMin > 8 && (contnum >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contnum > 8 && (contcaractMin >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contcaracMaj > 8 && (contnum >= 1 && contcaractMin >= 1 && contsimb >= 1)) ||
             + (contsimb > 8 && (contnum >= 1 && contcaracMaj >= 1 && contcaractMin >= 1))) {
               document.getElementById("message").style.color = "blue";
               document.getElementById("message").innerHTML = "Very Strong";
    } else if ((contcaractMin > 5 && (contnum >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contnum > 5 && (contcaractMin >= 1 && contcaracMaj >= 1 && contsimb >= 1)) ||
             + (contcaracMaj > 5 && (contnum >= 1 && contcaractMin >= 1 && contsimb >= 1)) ||
             + (contsimb > 5 && (contnum >= 1 && contcaracMaj >= 1 && contcaractMin >= 1))) {
               document.getElementById("message").style.color = "cian";
               document.getElementById("message").innerHTML = "Strong";
    } else if ((contcaractMin > 5 && (contnum>=1 && contcaracMaj>=1 || contnum>=1 && contsimb >= 1 || contcaracMaj>=1 && contsimb >= 1)) ||
             + (contnum > 5 && (contcaractMin>=1 && contcaracMaj >= 1 || contcaractMin>=1 && contsimb >= 1 || contcaracMaj>=1 && contsimb >= 1)) ||
             + (contcaracMaj > 5 && (contcaractMin>=1 && contnum >= 1 || contcaractMin>=1 && contsimb >= 1 || contnum>=1 && contsimb >= 1)) ||
             + (contsimb > 5 && (contcaractMin>=1 && contnum >= 1 || contcaractMin>=1 && contcaracMaj >= 1 || contnum>=1 && contcaracMaj >= 1))) {
               document.getElementById("message").style.color = "green";
               document.getElementById("message").innerHTML = "Good";
    } else if ((contcaractMin > 5 && (contnum >= 1 || contcaracMaj >= 1 || contsimb >= 1)) ||
             + (contnum > 5 && (contcaractMin >= 1 || contcaracMaj >= 1 || contsimb >= 1)) ||
             + (contcaracMaj > 5 && (contnum >= 1 || contcaractMin >= 1 || contsimb >= 1)) ||
             + (contsimb > 5 && (contnum >= 1 || contcaracMaj >= 1 || contcaractMin >= 1))) {
               document.getElementById("message").style.color = "orange";
               document.getElementById("message").innerHTML = "Weak";
    }else if ((contcaractMin > 5 && contnum == 0 && contcaracMaj == 0 && contsimb == 0) ||
      + (contcaractMin == 0 && contnum > 5 && contcaracMaj == 0 && contsimb == 0) ||
      + (contcaractMin == 0 && contnum == 0 && contcaracMaj > 5 && contsimb == 0) ||
      + (contcaractMin == 0 && contnum == 0 && contcaracMaj == 0 && contsimb > 5)) {
        document.getElementById("message").style.color = "brown";
        document.getElementById("message").innerHTML = "Very Weak";
    }

  }
}
