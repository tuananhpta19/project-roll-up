var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClassSchema = new Schema({
    nameClass: String,
    idAccount: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account'
    }],
    createAt: {
        type: Date,
        default: new Date()
    },
    updateAt: {
        type: Date,
        default: null
    }
}, { collection: 'class' })

var ClassModel = mongoose.model('class', ClassSchema);

module.exports = ClassModel