import {Router} from "express";
import AuthController from "../controllers/authController";

const authRoutes = Router();

authRoutes.post("/login", new AuthController().userLogin);
authRoutes.post("/register", new AuthController().userRegister);

export default authRoutes;
