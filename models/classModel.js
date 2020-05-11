var mongoose = require('../config/connectDB');


var ClassSchema = new Schema({
    nameClass: String,
    idAccount: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account'
    }]
}, { collection: 'class' })

var ClassModel = mongoose.model('class', ClassSchema)
module.exports = ClassModel