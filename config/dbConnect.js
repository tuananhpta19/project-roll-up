var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Project-attendance', { useNewUrlParser: true });
// var url = `${process.env.DB_PROTOCOL}://${process.env.DB_HOST}/${process.env.DB_DATABASE}`
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connecting...');
});