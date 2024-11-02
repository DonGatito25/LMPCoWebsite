const express = require('express');
const path = require('path');
const fs = require('fs').promises;
//
const app = express();
//
const clientPath = path.join(__dirname, "..", "client/src");
//
app.use(express.static(clientPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
