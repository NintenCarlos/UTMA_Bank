import CardModel from "../models/CardModel.js";

//Crear una trajeta
//Obtener tarjeta(s)

class ManagerCard {
  constructor(
    userId,
    accountId,
    cardNumber,
    cardType,
    expirationDate,
    securityCode,
    status
  ) {
    this.userId = userId;
    this.accountId = accountId;
    this.CardModel = cardNumber;
    this.cardType = cardType;
    this.expirationDate = expirationDate;
    this.securityCode = securityCode;
    this.status = status;
  }

  async createCard() {
    try {
      await CardModel.create({
        userId: this.userId,
        accountId: this.accountId,
        cardNumber: this.CardModel,
        cardType: this.cardType,
        expirationDate: this.expirationDate,
        securityCode: this.securityCode,
        status: this.status,
      });
      return "Ok";
    } catch (error) {
      throw new Error(`Error al crear tarjeta: ${error}`);
    }
  }

  async getCards() {
    try {
      const cards = await CardModel.find();
      return cards;
    } catch (error) {
      throw new Error(`Error al obtener tarjetas: ${error}`);
    }
  }

  async getCard(ID) {
    try {
      const card = await CardModel.findById(ID);
      return card;
    } catch (error) {
      throw new Error(`Error al obtener tarjeta: ${error}`);
    }
  }
}

export default ManagerCard