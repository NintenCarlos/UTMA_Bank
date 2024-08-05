class Tools {
  static expirationDate() {
    const actualDate = new Date();
    const year = actualDate.getFullYear();
    const expirationYear = year + 3 - 2000;
    const expirationMonth = actualDate.getMonth() + 1;
    const expirationDate = `${expirationMonth} / ${expirationYear}`;

    console.log(expirationDate);
  }

  static cvv() {
    const max = 999;
    const min = 100;
    const numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
    console.log(numeroAleatorio);
  }

  static cardNumber() {
    const max = 9999999999999999;
    const min = 1000000000000000;
    const numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
    console.log(numeroAleatorio);
  }

  // En el caso que el id tenga 10 digitos. 
  static accountId() {
    const max = 9999999999;
    const min = 1000000000;
    const numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
    console.log(numeroAleatorio);
  }
}

Tools.expirationDate();
Tools.cvv();
Tools.accountId();
Tools.cardNumber();
