const mongoose = require("mongoose")

const nameSchema = new mongoose.Schema({
    myBudget:{
        type: Object,
        required: false,
        unique: true,
    }
}, {collection: 'budjet'})

module.exports = mongoose.model('budjet', nameSchema)