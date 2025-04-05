import verifyCredential from "../auth/auth";
import { userModel } from "../models/models";

export class AuthService {
  async authUp(token: string, roles: string[]) {
    const payload = await verifyCredential(token);
    if (payload == undefined) return [false, "error in sign in"];
    const newUser = {
      name: payload.name ? payload.name : "",
      email: payload.email ? payload.email : "",
      imageUrl: payload.picture ? payload.picture : "",
      roles: roles.length > 0 ? roles : ["USER"],
    };
    // check if the user is already registered
    const checkUser = await userModel.findOne({ email: newUser.email });
    if (checkUser) {
      return [true, checkUser];
    }
    const data = await new userModel(newUser).save();
    return [true, data];
  }

  async verifyUser(data: any) {
    const userData = await userModel.findById(data.id);
    if (!userData) {
      return [false, "user not found"];
    }
    return [true, userData];
  }
}
