const log = console.log;

const url = 'mongodb://localhost:27017';
const mongoose = require('mongoose');

const dbConnect = ()=>{
// mongoose.connect() returns a promise
    mongoose.connect(url , {useNewUrlParser : true})
    .then(()=>{
        log(`Successfully Connected with MongoDB`);
    })
    .catch((err)=>{
        log(`Ooops!!! There might be a problem connecting MongoD server\n${err}`);
    })
}

module.exports = dbConnect;