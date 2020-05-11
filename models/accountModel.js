var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'user'
    },
    idClass: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class'
    }],
    idInfoStudent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'infoStudent'
    }
}, { collection: 'account' })

var AccountModel = mongoose.model('account', AccountSchema)
module.exports = AccountModel