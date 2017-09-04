const express = require("express");
const app = express();

app.use(express.static('public'))

app.get('/', function(res, req) {

    res.send('index.html')
})
app.listen(3000)