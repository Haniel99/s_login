import { NextFunction, Request, Response} from "express";
import { verifyToken } from "../helpers/jsonwebtoken";

const tokenValidator = async (req:Request, res: Response, next: NextFunction) => {
  try {
    let jwt: string | undefined = req.headers.authorization;
    if (!jwt) {
      return res.status(404).json({
        status: false,
        message: "No existe token en el encabezado.",
      });
    }
    
    let secretKey: string = process.env.SECRET_KEY_JWT || "";

    const  {payload}: any = verifyToken(jwt, secretKey);
    //Verificar existencia del usuario en la base de datos
   
    next();
} catch (error) {
    return res.status(404).json({
      status: false,
      message: "El token no es valido",
    });
  }
};

export default tokenValidator;
