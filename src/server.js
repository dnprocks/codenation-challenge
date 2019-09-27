require("dotenv").config();
const fs = require("fs");
const path = require("path");
const CodenationService = require("./app/services/CodenationServices");

setTimeout(async function() {
  try {
    const anwser = await CodenationService.getCypher();
    console.log(anwser.cifrado);
    fs.writeFile(
      path.resolve(__dirname, "..", "output", "answer.json"),
      JSON.stringify(anwser),
      function(err) {
        if (err) {
          return console.log(err);
        }
      }
    );
  } catch (error) {
    console.log(err);
  }
}, 0);
