import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const config = {
  port: Number(process.env.PORT),
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
  app_url: process.env.APP_URL,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expired: process.env.JWT_ACCESS_EXPIRED,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
};

export default config;