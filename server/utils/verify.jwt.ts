import jwt from "jsonwebtoken";

export const verifyJWT = async (token: string):Promise<[boolean, any]> => {
  if (!token && token == "") {
    return [false, "token not present"];
  }
  if (!process.env.JWT_SECRET) {
    return [false, "secret not present"];
  }
  const verify = jwt.verify(token, process.env.JWT_SECRET);
  if (!verify) {
    return [false, "verification fails"];
  }
  return [true, verify];
};
