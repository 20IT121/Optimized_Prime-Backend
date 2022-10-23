const log = console.log;

const express = require('express');
const app = express();
// created an express application

const PORT = 8080;

const dataRouter = require('./controller/data.router');

// First to parse the data we will create middlewares
app.use(express.json());
app.use(express.urlencoded());
// for parsing json type data and url encoded data like JSON objects

app.use('/api',dataRouter);

app.listen(PORT , (err)=>{
    if(err)
        log(`OOPSS!!! There is a problem\n${err}`);
    log(`Listening @ port number : ${PORT}`);
});


