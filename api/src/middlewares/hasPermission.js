import PERMISSIONS from "./permissions.js";
import jwt from "jsonwebtoken";

const hasPermission = async (req,res,next) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];
        if(!token){
            req.user = { role: 'guest' };
        } else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        }
        const url = req.url.split("/")[2];
        const baseUrl = req.url.split("/")[1];
        const userRole = req.user.role;
        if (PERMISSIONS[baseUrl][req.method.toLowerCase()].includes(userRole) && (userRole === 'admin' || PERMISSIONS[baseUrl][req.method.toLowerCase()].includes('guest'))) {
            next();
        } else {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }
    }catch(error){
        console.error(error)
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export default hasPermission