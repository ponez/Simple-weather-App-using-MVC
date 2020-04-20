const express = require('express')
const Router = express.Router()
const controller = require('./controllers/controller')



    Router.get("/", controller.renderHomePage)
    Router.post("/", controller.letsRenderDaPost)
module.exports = Router