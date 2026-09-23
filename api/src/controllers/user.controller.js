import userServices from '../services/user.service.js';

const userController = {
    createUser: async (req, res) => {
        try {
            const createdUser = await userServices.createUser(req.body);
            res.status(201).json(createdUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default userController;