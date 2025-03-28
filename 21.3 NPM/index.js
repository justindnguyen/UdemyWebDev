//var generateName = require("sillyname");
import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// To use ES Modules, add type: "module" to package.json

import superheroes from 'superheroes';
var randomHero = superheroes.random();

console.log(`I am ${randomHero}.`);