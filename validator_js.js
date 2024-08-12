var button = document.getElementById("submit");
button.addEventListener("click", validateForm());

function validateForm() {
  checkUserId()
  checkPassword()
  checkName()
  checkAddress()
  checkCountry()
  checkPostNum()
  checkMail()
  checkGender()
}

function checkUserId() {
  let id = document.forms["testForm"]["userId"].value;
  let idlen = id.length;
  if (id == "" || id== " " || idlen < 6) {
    document.getElementById("note").innerHTML = "Tarkistuksessa ilmeni seuraavia virheitä:";
    document.getElementById("warnings1").innerHTML = "-Käyttäjänimessä tulee olla vähintään 6 merkkiä";
    return false;
  } else {
    document.getElementById("note").innerHTML ="";
    document.getElementById("warnings1").innerHTML = "";
    return true;  
  }
}

function checkPassword() {
  var chars = /^(?=.*[0-9])(?=.*[!@£$€&%#^&*])[a-zA-Z0-9!@£$€&%#^&*]{6,}$/;
  if (chars.test(document.getElementById("passw").value) == false) {
    document.getElementById("note").innerHTML = "Tarkistuksessa ilmeni seuraavia virheitä:";
    document.getElementById("warnings2").innerHTML = "-Salasanassa tulee olla vähintään 6 merkkiä, joista<br> vähintään yksi on numero, yksi iso kirjain,<br>sekä joku erikoismerkeistä !@£$€&%#";
    return false;
  } else {
    document.getElementById("note").innerHTML = "";
    document.getElementById("warnings2").innerHTML = "";
    return true;  
  }
}

function checkName() {
  let names = document.forms["testForm"]["fnameLname"].value;
  if (names == "" || names == "." ) {
    document.getElementById("note").innerHTML = "Tarkistuksessa ilmeni seuraavia virheitä:";
    document.getElementById("warnings3").innerHTML = "-Nimi puuttuu"
    return false;
  } else {
    document.getElementById("note").innerHTML = "";
    document.getElementById("warnings3").innerHTML = "";
    return true;  
  }  
}

function checkAddress() {
  let addr = document.forms["testForm"]["address"].value;
  if (addr == "" || addr == "." ) {
    document.getElementById("note").innerHTML = "Tarkistuksessa ilmeni seuraavia virheitä:";
    document.getElementById("warnings4").innerHTML = "-Osoite puuttuu";
    return false;
  } else {
    document.getElementById("note").innerHTML = "";
    document.getElementById("warnings4").innerHTML = "";
    return true;  
  } 
}

function checkCountry() {
  let country = document.forms["testForm"]["country"].value;
  if (country == "") {
     document.getElementById("note").innerHTML = "Tarkistuksessa ilmeni seuraavia virheitä:";
     document.getElementById("warnings5").innerHTML = "-Valitse kansalaisuus";
     return false;
  } else {
    document.getElementById("note").innerHTML = "";
    document.getElementById("warnings5").innerHTML = "";
    return true;  
  } 
}

function checkPostNum() {
  var lessThan5 = /^[0-9]{5}$/;
    if(lessThan5.test(document.getElementById('postNum').value) == false) {
      document.getElementById("note").innerHTML = "Tarkistuksessa ilmeni seuraavia virheitä:";
      document.getElementById("warnings6").innerHTML = "-Postinumero virheellinen";
      return false;
    } else {
      document.getElementById("note").innerHTML = "";
      document.getElementById("warnings6").innerHTML = "";
      return true;  
  }
}

function checkMail() {
  var mailCorrect = /\S+@\S+\.\S+/;
  if(mailCorrect.test(document.getElementById("mail").value) == false) {
    document.getElementById("note").innerHTML = "Tarkistuksessa ilmeni seuraavia virheitä:";
    document.getElementById("warnings7").innerHTML = "-Sähköpostiosoite virheellinen";
    return false;
  } else {
    document.getElementById("note").innerHTML = "";
    document.getElementById("warnings7").innerHTML = "";
    return true;  
  }
}

function checkGender() {
  let viking = document.getElementById("male")
  let princess = document.getElementById("female")
  if(viking.checked || princess.checked) {
     document.getElementById("note").innerHTML = "";
     document.getElementById("warnings8").innerHTML = "";
     return true;
  } else {
    document.getElementById("note").innerHTML = "Tarkistuksessa ilmeni seuraavia virheitä:";
    document.getElementById("warnings8").innerHTML = "-Valitse sukupuoli";
    return false;  
  } 
}

  


