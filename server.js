/**
 * Created by pawan on 5/3/17.
 */

const express = require('express');
const app = express();

app.use(express.static("static"));

app.listen(3000, function () {
    console.log("listening at 3000");
})