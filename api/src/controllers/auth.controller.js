import authServices from '../services/auth.service.js';

const authController = {
    login: async (req, res) => {
        try{
            const token = await authServices.login(req.body);
            req.session.token = token
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

export default authController