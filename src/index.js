require('dotenv').config();
const server = require('./api/server.js');

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Magic happening on port ${PORT}`);
});