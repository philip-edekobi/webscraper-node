const jobQueue = require('./queue');
const { searchPage } = require('./utils');
module.exports = class Controller{
    static queryPage = async ({ body: {selector, url}}, res) => {
        
        try{
            jobQueue.define("job", async (_job) => {                    
                try{
                    const results = await searchPage(selector, url);
            
                    res.status(200).json({ "results": results});
                } catch(error){
                    if(error){
                        res.status(500).json({"message": "An internal server error occurred"});
                    }
                }
            });

            await jobQueue.now("job");
        } catch(error){
            throw new Error(error.message);
        }
    }
}