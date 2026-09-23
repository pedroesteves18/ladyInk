import healthService from "../services/health.service.js";

const healthController = {
    checkHealth: async (req, res) => {
        try {
            await healthService.checkHealth();
            res.status(200).json({ status: "Database is up" });
        }catch(err){
            res.status(500).json({ status: "Database is down", error: err.message });
        }
    },
    checkApiHealth: async (req,res) => {
        try{
            res.status(200).json({ status: "API is running" });
        }catch(err){
            res.status(500).json({ status: "API is down", error: err.message });
        }
    }
};

export default healthController;