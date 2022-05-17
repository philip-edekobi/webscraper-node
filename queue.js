const Agenda = require('agenda');

require("dotenv").config();

const agenda = new Agenda({
    db: {
        address: process.env.MONGO_URI
    }
});

(async () => {
    await agenda.start();
})();

module.exports = agenda;