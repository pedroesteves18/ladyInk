import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userService from '../services/user.service.js';

const authServices = {
    login: async (data) => {
        const user = await userService.getUserByInstagram(data.instagram);
        if (!user) throw new Error('User not found');
        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');
        const token =  jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return `Bearer ${token}`;
    }

}

export default authServices