const { searchPage } = require('./utils');
module.exports = class Controller{
    static queryPage = async (req, res) => {
        const { selector, url } = req.body;
        
        try{
            const results = await searchPage(selector, url);
            
            res.status(200).json({ "results": results});
        } catch(error){
            if(error){
                res.status(500).json({"message": "An internal server error occurred"});
            }
        }
    }
}