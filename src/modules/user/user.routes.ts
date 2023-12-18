import { Router } from "express";
const router = Router();
import { UserModule }  from "./UserModule";

router.post("/login", UserModule.login);
router.post("/validate-email", UserModule.validaEmail);
export { router };
