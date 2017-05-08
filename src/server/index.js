const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.resolve(__dirname, '../../dist')))
app.use('/src/assets', express.static(path.resolve(__dirname, '../src/assets')))

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../index.html'));
})

const server = app.listen('8090', () => console.log('Server started'))