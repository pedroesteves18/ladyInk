import prisma from "../../config/database.js";

const userServices = {
    createUser: async (userData) => {
        const createdUser = await prisma.user.create({
            data: userData,
        });
        return createdUser;
    },
    getUsers: async () => {
        return await prisma.user.findMany();
    },
    getUserByInstagram: async (instagram) => {
        return await prisma.user.findUnique({
            where: { instagram },
        });
    }
};

export default userServices;