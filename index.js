const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const port = 4000 || process.env.PORT;

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => console.log(`running on port ${port}`));
