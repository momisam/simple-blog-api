const express =  require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

app.use('/admin', (req, res, next) => {
    const authToken = req.headers['authorization'];
    if (authToken === 'o50592'){
        console.log('User authenticated');
        next();
    } else {
        res.status(401).send('Unauthorized: Invalid Token');
    }
});

