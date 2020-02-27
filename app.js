const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'Passei aqui e sai correndo!!'
    })
})


module.export = app;
