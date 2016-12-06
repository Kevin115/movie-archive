//****************************************************
// Importing Sass & Pug Template
//****************************************************
import '../sass/index.sass'
import template from '../template/index.pug'
import fs from 'fs'

//****************************************************
// Import Libs
//****************************************************
import $ from 'jquery'

// Append Pug Template Data
// To The Body
$('body').append(template())

// Find All Files
fs.readdir(process.env.HOME + 'TO_MOVIES', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})
