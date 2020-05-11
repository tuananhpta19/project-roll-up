var mongoose = require('mongoose');
var url = `${process.env.DB_PROTOCOL}://${process.env.DB_HOST}/${process.env.DB_DATABASE}`
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connecting...');
});
module.exports= mongoose