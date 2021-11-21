const express = require("express");
const requests = require("requests");
const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

// get api response using requests
// app.get("/apicall", (req, res) => {
//     const id = req.query.id;
//     console.log(id);
//     // requests("https://jsonplaceholder.typicode.com/todos/1")
//     //     .on("data", function(chunk) {
//     //         res.send(JSON.parse(chunk));
//     //         // console.log(chunk);
//     //     })
//     //     .on("end", function(err) {
//     //         if (err) return console.log("connection closed due to errors", err);
//     //         console.log("end");
//     //     });
// });

app.listen(8000, (req, res) => {
    console.log(`listening on port ${port}`);
});