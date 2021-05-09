const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
 res.send(`api listening on ${process.env.PORT || 8080}`)
});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on ${process.env.PORT || 8080}`));
