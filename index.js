#!/usr/bin/env node

const figlet = require('figlet');

const chalk = require('chalk');
figlet('Damien Macors', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    let npm = "https://www.npmjs.com/~damscode";
    let gh = "https://github.com/DamsCodes";
    let lk = "https://www.linkedin.com/in/damien-macors-b4915028/";
    console.log(chalk`
         {bgRed.whiteBright npm}: ${npm}
      GitHub: ${gh}
    {bgBlue LinkedIn}: ${lk}
`);
});


