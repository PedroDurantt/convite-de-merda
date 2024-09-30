function checkName(isTalita) {
    const response = document.getElementById("response");
  
    if (isTalita) {
      response.textContent = "Passando pra te avisar, Talita, que hoje tem sessãozada de filme 21:00 no discord!!";
    } else {
      response.textContent = "Mete o pé daqui, safado(a)!";
    }
  }
  