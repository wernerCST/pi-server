var express = require("express");
var app = express();

app.get('/', (req, res) => res.status(200).json({ result: 'Success from PI!' }));

app.listen(3000, () => {
    console.log("server running on poer 3000");
});