const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let interviewers = [];

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/interviewers", (req, res) => {
  res.send("Hello World, from interviewers");
});

app.post('/interviewers', (req, res) => {
  res.send("Hello World, from interviewers");
});

app.listen(port, () => console.log(`listening on port ${port}`))