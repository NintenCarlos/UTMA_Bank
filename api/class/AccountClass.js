//Obtener cuenta
//Obtener cuentas
//Agregar/Restar balance
//Crear cuenta

import AccountModel from '../models/AccountModel.js';
class ManagerAccounts {
    constructor(userId, accountNumber, accountType, balance){
        this.userId = userId
        this.accountNumber = accountNumber
        this.accountType = accountType
        this.balance = balance
    }

    async getAccounts(){
        try {
            const accounts = await AccountModel.find();
            return accounts;
        } catch (error) {
            throw new Error(`Error al obtener cuentas: ${error}`)   
        }
    }

    async getAccount(accountID){
        try {
            const account = await AccountModel.findById(accountID)
            return account;
        } catch (error) {
            throw new Error(`Error al obtener cuenta: ${error}`)   

        }
    }

    async addBalance(accountID, amount){
        try {
            this.balance += amount;
            await AccountModel.findByIdAndUpdate(accountID, {
                $set:{
                    balance:this.balance
                }
            })
            return 'Ok'
        } catch (error) {
            throw new Error(`Error al hacer la transacción: ${error}`)   

        }
    }

    async restBalance(accountID, amount){
        try {
            this.balance -= amount;
            await AccountModel.findByIdAndUpdate(accountID, {
                $set:{
                    balance:this.balance
                }
            })
            return 'Ok'
        } catch (error) {
            throw new Error(`Error al hacer la transacción: ${error}`)   

        }
    }

    async createAccount(){
        try {
            await AccountModel.create({
                userId:this.userId,
                accountNumber:this.accountNumber,
                accountType:this.accountType,
                balance:this.balance
            })
            return 'Ok'
        } catch (error) {
            throw new Error(`Error al hacer la transacción: ${error}`)   
        }
    }
}

export default ManagerAccounts