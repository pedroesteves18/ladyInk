import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"
import userServices from "../src/services/user.service.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

prisma.databaseConnection = async () => {
    try{
        await prisma.$connect();
        console.log("Database connection established");
        const users = await userServices.getUsers();
        const hasAdmin = users.find(user => user.role === 'admin');
        if (!hasAdmin) {
            const password = await bcrypt.hash(process.env.ADMIN_KEY, parseInt(process.env.ROUNDS));
            userServices.createUser({
                name: "Admin",
                role: "admin",
                instagram: "teste",
                password: password
            });
        }
    }catch(err){
        console.error("Error connecting to the database:", err);
    }
}

export default prisma;