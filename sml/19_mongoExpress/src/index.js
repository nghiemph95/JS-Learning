// const express = require("express");
// const path = require("path");
// const morgan = require("morgan");
// const handlebars = require("express-handlebars");
import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { connect } from './config/db';

// Connect to MongoDB
console.log(connect());

//App init
const app = express();
const port = 3000;

// Create __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** App là instance của express */
// get Image
app.use(express.static(path.join(__dirname, 'public')));

// get midleware to use in case POST Form Data
app.use(express.urlencoded({ extended: true })); // data gửi từ client thì sử dụng midleware này để xử lý
app.use(express.json()); //đata gửi từ server thì sử dụng midleware này để xử lý

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
app.get('/news', (req, res) => res.render('news'));
app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  // express sử dụng parkage qs npm (querystring) để lấy thông tin bỏ vô body cho mình
  console.log(req.body);
  res.send('OK');
});

app.listen(port, () => console.log(`Example app listenning at http://localhost:${port}`));
