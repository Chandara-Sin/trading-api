import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { main } from "./app";
import { initPrismaClient } from "./config/db";
import { IUserService, UserService } from "./domain/user/user.service";
import { logger } from "./logger";

export interface IAppDependencies {
  userService: IUserService;
}

const port = process.env.PORT ?? "8000";

const start = () => {
  try {
    const prismaClient = initPrismaClient();
    const dependencies = initDependencies(prismaClient);
    const app = main(dependencies);

    app.listen(port, () => {
      console.info(
        `Server start at http://localhost:${port}\nEnvironment: ${
          process.env.NODE_ENV ?? "local"
        }\nTime: ${new Date().toISOString()}`
      );
    });
  } catch (err) {
    logger.error(err);
  }
};

export const initDependencies = (prismaClient: PrismaClient): IAppDependencies => ({
  userService: new UserService(prismaClient),
});

start();
