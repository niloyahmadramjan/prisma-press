import { Request, Response } from "express";
import { userService } from "./user.service";
import { status } from "http-status";

const userRegister = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const user = await userService.registerUserIntoDB(payload);

    res.status(status.CREATED).json({
      status: true,
      message: "Registreation successfull",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(status.INTERNAL_SERVER_ERROR).json({
      success: false,
      status: status.INTERNAL_SERVER_ERROR,
      message: "Faild to register user ",
      error: (error as Error).message,
    });
  }
};

export const userController = { userRegister };
