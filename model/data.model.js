const log = console.log;

const mongoose = require('mongoose');

let dataSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : true
    },
    type : {
      type : String,
      required : true  
    },
    content : {
        type : Array,
        required : true
    }
});



const ds = mongoose.model("Data Structures" , dataSchema);

module.exports = ds;

