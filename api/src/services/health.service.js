import prisma from "../../config/database.js";

const healthServices = {
  checkHealth: async () => {
    await prisma.$connect();
  }
};

export default healthServices;