var mongoose = require('mongoose');
var connectDB = () => {
    var url = `${process.env.DB_PROTOCOL}://${process.env.DB_HOST}/${process.env.DB_DATABASE}`;
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}
connectDB();
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db connecting....");
});
module.exports = connectDB