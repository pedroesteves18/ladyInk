import bcrypt from 'bcrypt';

const hashPassword = async (req, res, next) => {
    try{
        if (!req.body.password) return res.status(400).json({ error: 'Password is required' });
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error hashing password' });
    }
}

export default hashPassword;
