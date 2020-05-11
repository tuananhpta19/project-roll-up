var mongoose = require('../config/connectDB');

var InfoStudentSchema = new Schema({
    point: {
        type: mongoose.Schema.Types.Number,
        default: null
    },
    notes: {
        type: mongoose.Schema.Types.String,
        default: null
    },
    phone: {
        type: mongoose.Schema.Types.Number,
        default: null
    },
    attendance: {
        type: mongoose.Schema.Types.String,
        default: null
    },
    idAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account'
    }

}, { collection: 'infoStudent' })

var InfoStudentModel = mongoose.model('infoStudent', InfoStudentSchema)
module.exports = InfoStudentModel