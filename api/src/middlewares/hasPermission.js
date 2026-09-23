import PERMISSIONS from "./permissions.js";
import jwt from "jsonwebtoken";

const hasPermission = async (req,res,next) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];
        const paramId = req.routeParam || null;
        if(!token){
            req.user = { role: 'guest' };
        } else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
        }

        const baseUrl = req.url.split("/")[1];
        const userRole = req.user.role;

        console.log(req.user.id, paramId)
        if (PERMISSIONS[baseUrl][req.method.toLowerCase()].includes(userRole)) {
            if(req.user.role === 'admin') next();
            else if(!paramId) next()
            else if(paramId && req.user.id && req.user.id.toString() === paramId.toString()) next();
            else return res.status(403).json({ error: 'Insufficient permissions' });
        } else {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }
    }catch(error){
        console.error(error)
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export default hasPermission