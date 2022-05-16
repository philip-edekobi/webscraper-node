const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*",
}));

(async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        const server = await http.createServer(app);
        await server.listen(PORT, () => console.log(`listening on port ${PORT}`));
    } catch(error){
        if(error){
            throw error;
        } 
    }
})();