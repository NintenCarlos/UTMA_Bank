import TransactionModel from "../models/TransactionModel.js";

class ManagerTransaction {
  constructor(accountFromId, accountToId, type, amount, description) {
    this.accountFromId = accountFromId;
    this.accountToId = accountToId;
    this.type = type;
    this.amount = amount;
    this.description = description;
  }

  async createTransaction() {
    try {
      const transaction = await TransactionModel.create({
        accountFromId: accountFromId,
        accountToId: accountToId,
        type: type,
        amount: amount,
        description: description,
      });
      return transaction;
    } catch (error) {
      throw new Error(`Error al crear la transacción: ${error}`);
    }
  }

  async getTransaction(id) {
    try {
      const transaction = await TransactionModel.findById(id);
      return transaction;
    } catch (error) {
      throw new Error(`Error al obtener la transacción: ${error}`);
    }
  }

  async getTransactions() {
    try {
      const transactions = await TransactionModel.find();
      return transactions;
    } catch (error) {
      throw new Error(`Error al obtener las transacciónes: ${error}`);
    }
  }

  async getAccountTransactions(id) {
    try {
      const transactions = await TransactionModel.find({ accountFromId: id });
      return transactions;
    } catch (error) {
      throw new Error(`Error al obtener la transacción ${error}`);
    }
  }
}
