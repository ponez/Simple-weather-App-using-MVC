const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const router = require('./router')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))


app.use("/", router)


app.listen(3000, () => {
    console.log("server is listening on port 3000")

})
