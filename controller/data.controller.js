const log = console.log;

const DS = require('../model/data.model');

const getGraphSpecificContent = (req,res)=>{
    DS.find({name : "graph" , id : req.params.content , type : "nonlinear"} , (err , data)=>{
        if(err)
            res.status(500).json({error : "No data exists"});
        res.status(200).send(data);
        let DataJSON = JSON.parse(JSON.stringify(data));
        console.log(`Data of type graph and displaying the content ${req.params.content}\n${DataJSON[0]}`)
    })
}

module.exports = {
    getGraphSpecificContent
}