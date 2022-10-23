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
    content : {
        type : Array,
        required : true
    }
});

const linearDS = mongoose.model("LinearDS" , dataSchema);
const nonLinearDS = mongoose.model("Non-LinearDS" , dataSchema);

module.exports = {
    linearDS,
    nonLinearDS
};
