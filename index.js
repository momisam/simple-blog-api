const express =  require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

