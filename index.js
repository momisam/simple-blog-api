const express =  require('express');
const app = express();
port = 3000;
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

//Public Route
app.get('/public', (req, res,) => {
    res.send('Welcome to my Oluchi blog!');
});

//protected Route
app.get('/admin', (req, res) => {
    res.send('Welcome to the admin panel!');
});

//Error-Handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});