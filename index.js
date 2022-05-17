const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const path = require('path');

const apiRoutes = require("./routes");

require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors({
    origin: "*",
}));

app.use("/api/v1/", apiRoutes);

app.use(express.static(path.join(__dirname, "client_", "build")));
app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "client_", "build", "index.html"));
});

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