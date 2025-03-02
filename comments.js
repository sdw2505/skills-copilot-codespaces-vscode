// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Set up body parser to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded