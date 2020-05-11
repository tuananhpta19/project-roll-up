var mongoose = require('mongoose');
var ClassSchema = new Schema({
    nameClass: String,
    idAccount: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account'
    }]
}, { collection: 'class' })

var ClassModel = mongoose.model('class', ClassSchema)
module.exports = ClassModel