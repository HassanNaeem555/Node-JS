// const importContent = require("./server");

// console.log("importContent", importContent);
// console.log(exports, require, module, __filename, __dirname);


// Node js run on Non Blocking Io module and on Single Threaded Io module

console.log("Hello World");

// import simpleDefault from ".//learningEs6InNodejs.mjs";
// Or
// This will return all the content of the module 

import * as simpleDefault from "./learningEs6InNodejs.mjs";
console.log("simpleDefault", simpleDefault);

// Node js works on Event Driven Architecture (From anywhere the event is fired we can take action against it or fire an event)