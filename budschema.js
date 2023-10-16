const mongoose = require("mongoose")

const nameSchema = new mongoose.Schema({
    myBudget: [{
        title: {
                type: String,
                trim: true,
                required: true,
                uppercase: false
            },
        budget:{
            type: Number,
            required: true,
            unique: false,
        },
        color: {
            type: String,
            trim: true,
            required: true,
            uppercase: false
        }
    }]
}, {collection: 'budjet'})

module.exports = mongoose.model('budjet', nameSchema)