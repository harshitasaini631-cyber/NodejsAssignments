const express = require("express");

const logger = require("./middleware/logger");

const studentRoutes = require("./routes/studentRoutes");

const app = express();



app.use(express.json());

app.use(logger);



app.get("/", (req, res) => {

    res.send({ msg: "Home Page" });

});



app.use("/students", studentRoutes);


app.listen(8080, () => {

    console.log("server started");

});