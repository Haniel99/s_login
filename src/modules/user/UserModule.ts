import { Request, Response } from "express";
import errorHandler from "../../helpers/errorhandler";
import { generateHash, verifyHash } from "../../helpers/encryption";
import { generateToken } from "../../helpers/jsonwebtoken";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { PrismaClient, Prisma } from "@prisma/client";
export class UserModule {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const prisma = new PrismaClient();
      /*
      //Verify email
      const user = await User.findOne({
        where: { email: email },
      });

      if (!user) {
        return res.status(500).send("The user is not register");
      }

      //Verify passwod
      const validate = await verifyHash(password, user.password);

      if (!validate) {
        return res.status(500).send("The credentials is avaible");
      }

      const jwt = generateToken(user.id);

      await User.update(
        {
          token: jwt,
        },
        { where: { id: user.id } }
      );
      return res.json({
        state: true,
        msg: "Authorizate",
        data: {
          user: user,
          jwt: jwt,
        },
      });*/
    } catch (error) {
      errorHandler(res);
    }
  }
  static async validaEmail(req: Request, res: Response) {
    try {
      const { email } = req.body;
      /*const user = await User.findOne({
        where: { email: email },
      });
      if (!user) {
        return res.status(400).send('The email is not exist');
      }

      return res.status(200).json({
        state: true,
        msg: "User registered",
        res: user,
      });*/
    } catch (error) {
      errorHandler(res, error);
    }
  }
}
