import { Response } from "express";
const errorHandler = (res: Response, err?: any, message?: string) => {
  console.log(err);
  return res.status(400).json({
    status: false,
    msg: message
      ? message
      : "Error en el servidor, comuniquese con el administrador",
  });
};

export default errorHandler;
