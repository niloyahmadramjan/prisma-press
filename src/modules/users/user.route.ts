import { request, Router } from "express";
import { userController } from "./user.controller";

const router = Router()

router.post("/register", userController.userRegister)


export default router