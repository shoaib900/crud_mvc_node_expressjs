require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const routes = require("./router/router");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB)
.then( ()=> console.log("DB connection established"))

// midlware
app.use(express.static("./views"))
app.use(cors())
app.use(express.json());
app.use("/", routes)


app.listen(port,()=> console.log(`server is running on port ${port}`))
