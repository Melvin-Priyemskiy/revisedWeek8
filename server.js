const express = require('express');
const app = express();
const port = 3000;
app.use('/pb', express.static('public'));
const budgetBackEnd = require('./budget.json');

//new8**************************************************************************************

var dataSource = {
    datasets: [
        {
            data: [
                // 30, 350, 90
            ],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#f84fdd',
                '#07dec3',
                '#43c088',
            ],
        }
    ],
    labels: [
        // 'Eat out', 
        // 'Rent',
        // 'Groceries'
    ]
};

const nameSchema = require("./budschema")
const mongoose = require("mongoose")
let url = 'mongodb://127.0.0.1:27017/mongodb_demo';





mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        console.log("connected");

        // nameSchema.find({})
        // .then((data)=>{
        //     console.log(dataSource)
        // })
        // .catch((connectionError)=>{
        //     console.log("error: retrieve1")
        // })


        //get data
       // let newData = new nameSchema({id:13, name:"testing"})
        let newData = new nameSchema({myBudget: [{title: "dorm", budget: 240, color: "#16727b"}]})

        nameSchema.insertMany([newData])
            .then((data)=>{
                console.log(data)
                //mongoose.connection.close()
            })
            .catch((connectionError)=>{
                console.log("error: insert")
            })


  // get data
        nameSchema.find({})
            .then((data)=>{
                dataSource = data
                console.log(dataSource)
                mongoose.connection.close()
            })
            .catch((connectionError)=>{
                console.log("error: retrieve2")
            })


    })
    .catch((connectionError) =>{
        console.log("an error for");
    })


    ///*****************************************************************************************88 */


app.get('/', (req, res) => {
    res.send([dataSource]);
});

app.get('/budget', (req, res) => {
    res.json(budgetBackEnd);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:$(port)');
});