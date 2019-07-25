const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/api', routes);

app.listen(8000);
