import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import { UserRegisterPayload } from "./registerUserInterface";



const registerUserIntoDB = async(payload : UserRegisterPayload)=>{
  const {name, email,password, profilePhoto,bio} = payload;
     const isUserExist = await prisma.user.findUnique({ where: { email } });
  if (isUserExist) {
    throw new Error("User with this email already exists");
  }

  const hashPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  const createUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  await prisma.profile.create({
    data: {
      userId: createUser.id,
      profilePhoto: profilePhoto,
      bio: bio,
    },
  });

  const user = await prisma.user.findUnique({
    where: { id: createUser.id, email: createUser.email || email },
    omit: { password: true },
    include: { profile: true },
  });

  return user

}

export const userService = {registerUserIntoDB}