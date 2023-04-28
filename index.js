const express = require('express');
require('dotenv').config()
const cors = require("cors");
const { dbConnect } = require('./config/dbMongo');

const app = express();

app.use(cors());

// middlewares
app.use(express.static("public"))
app.use(express.json());
app.use(express.static("upload"));

// main routes
app.use("/api/v1", require("./routes"));

const port = process.env.PORT || 3001;

// =======Ruta de docs=====//

app.listen(port, () => {

  dbConnect()
  console.log(`listening on http://localhost:${port}`)
});

