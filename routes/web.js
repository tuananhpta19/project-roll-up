var router = require("express").Router();
var passport = require("passport")
var passportLocal = require('passport-local')
var initPassportLocal = require("../controllers/passport/passport-local")
initPassportLocal();
var initRouter = (app)=>{
//create router


 app.use("/",router)
}
module.exports = initRouter;