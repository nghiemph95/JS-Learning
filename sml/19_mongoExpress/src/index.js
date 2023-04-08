// const express = require("express");
// const path = require("path");
// const morgan = require("morgan");
// const handlebars = require("express-handlebars");
import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

//App init
const app = express();
const port = 3000;

// Create __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** App là instance của express */
// get Image
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route
app.get('/', (req, res) => res.render('home'));
app.get('/news', (req, res) => res.render('`news`'));

app.listen(port, () => console.log(`Example app listenning at http://localhost:${port}`));
