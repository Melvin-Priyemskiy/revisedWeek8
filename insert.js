const nameSchema = require("./budschema")
const mongoose = require("mongoose")
let url = 'mongodb://127.0.0.1:27017/mongodb_demo';


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        console.log("connected");

        //get data
        let newData = new nameSchema({myBudget: [{title: "test", budget: 24, color: "#16727b"}]})

        nameSchema.insertMany([newData])
            .then((data)=>{
                console.log(data)
                mongoose.connection.close()
            })
            .catch((connectionError)=>{
                console.log("error cannont get dataS")
            })

    })
    .catch((connectionError) =>{
        console.log("an error for");
    })
