// Node Js works on EventDriven Architecture

import EventEmitter from "events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
  console.log("Please turn off the motor!");
  setTimeout(() => {
    console.log("Please turn off the motor! Its a Gentle Reminder");
  }, [3000]);
});

console.log("JavaScript is running");

myEmitter.emit("WaterFull");
