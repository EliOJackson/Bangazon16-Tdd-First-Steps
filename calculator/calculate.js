#!/usr/bin / env node

'use strict';


const { argv: [, , ...args] } = process;
const cli = require('./cli.js')(args);