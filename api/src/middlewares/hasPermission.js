import PERMISSIONS from "./permissions.js";
import jwt from "jsonwebtoken";

const hasPermission = async (req,res,next) => {
    try{
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        const userRole = req.user.role;
        const url = req.baseUrl.split('/')[1];
        if (PERMISSIONS[url] && (PERMISSIONS[url][req.method.toLowerCase()].includes(userRole))) {
            if(req.user.id !== req.body.userId && userRole !== 'admin') {
                return res.status(403).json({ error: 'Insufficient permissions' });
            }
            next();
        } else {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }
    }catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export default hasPermission