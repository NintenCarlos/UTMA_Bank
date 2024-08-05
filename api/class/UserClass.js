import UserModel from "../models/UserModel.js";
import ManagerAccounts from "./AccountClass.js";
import ManagerCard from "./CardClass";
/*
Registrar usuario
Iniciar sesión
Cerrar sesión 
Crear transacciones
Obter informacion
Pedir préstamos
Borrar cuenta 
Actualizar cuenta
*/

class ManagerUser {
  constructor(email, phone, name, lastName, isInSession, isAdmin, password) {
    this.email = email;
    this.phone = phone;
    this.name = name;
    this.lastName = lastName;
    this.isInSession = isInSession;
    this.isAdmin = isAdmin;
    this.password = password;
  }
  async register() {
    try {
      const user = await UserModel.create({
        email: this.email,
        phone: this.phone,
        name: this.name,
        lastName: this.lastName,
        isInSession: this.isInSession,
        isAdmin: this.isAdmin,
        password: this.password,
      });
      const MA = new ManagerAccounts(user._id, '12345', "Ahorro", 10000);
      const curretAccount = await MA.createAccount();
      const MC = new ManagerCard(
        user._id,
        curretAccount._id,
        "16 digitos al azar",
        "débito",
        "fecha actual + 3 años",
        "CVV",
        "active"
      );
      await MC.createCard();
      return user;
    } catch (error) {
      throw new Error(`Error al registrar usuarios: ${error}`);
    }
  }

  async Login(email, password) {
    try {
      const user = await UserModel.findOne({ email: email });
      if (!user) {
        throw new Error(`Usuario no registrado.`);
      }
      if (user.password !== password) {
        throw new Error(`Contraseña incorrecta. `);
      }
      return "Succeeded";
    } catch (error) {
      throw new Error(`Error al iniciar sesión: ${error}`);
    }
  }

  async getUserInfo(id) {
    try {
      const user = await UserModel.findById(id);
      return user;
    } catch (error) {
      throw new Error(`Error al obtener la información del usuario: ${error}`);
    }
  }

  async updateUserEmail(id, email) {
    try {
      if (!email) {
        throw new Error(`Correo inválido`);
      }
      await UserModel.findByIdAndUpdate(id, {
        $set: { email },
      });
      return "Ok";
    } catch (error) {
      throw new Error(`Error al actualizar el correo: ${error}`);
    }
  }

  async updateUserPhone(id, phone) {
    try {
      if (!phone) {
        throw new Error(`Teléfono inválido`);
      }
      await UserModel.findByIdAndUpdate(id, {
        $set: { phone },
      });
      return "Ok";
    } catch (error) {
      throw new Error(`Error al actualizar el teléfono: ${error}`);
    }
  }

  async updateUserPassowrd(id, password) {
    try {
      if (!password) {
        throw new Error(`Contraseña inválida`);
      }
      await UserModel.findByIdAndUpdate(id, {
        $set: { password },
      });
      return "Ok";
    } catch (error) {
      throw new Error(`Error al actualizar la contraseña: ${error}`);
    }
  }

  async deleteUser() {}
}

export default ManagerUser;
