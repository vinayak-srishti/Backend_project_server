const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConnection');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

db();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/uploads`));
app.use(cors());

const route = require('./routes');
app.use('/judisys_api', route);


app.get('/', (req, res) => {
  res.send('Judicial System Backend is running');
});


const port = process.env.PORT || 4048;
app.listen(port, () => {
  console.log(`Server created successfully at ${port}`);
});
