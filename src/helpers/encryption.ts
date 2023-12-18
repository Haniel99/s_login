import { compare, hash } from "bcrypt";

const generateHash = async (data: string) => {
  try {
    const hashData = await hash(data, 10);
    return hashData;
  } catch (error) {
    console.log(error);
    throw new Error("Error al encryptar el dato");
  }
};

const verifyHash = async (data: string | Buffer, dataHash: string|null) => {
  try {
    if (!dataHash) {
      return false;
    }
    const result = await compare(data, dataHash);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { generateHash, verifyHash };
