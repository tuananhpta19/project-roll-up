var router = require("express").Router();
var classModel = require("../models/classModel")
var initRouter = (app) => {
    //create router
    router.get("/demo", function(req, res) {
        classModel.create({
            nameClass: 'lop 1'
        }).then(function(data) {
            var theDate = data.createAt
            res.json(theDate.toLocaleDateString())
        })
    })

    app.use("/", router)
}
module.exports = initRouter;