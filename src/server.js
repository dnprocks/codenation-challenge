require("dotenv").config();
const fs = require("fs");
const path = require("path");
const sha1 = require("sha1");
const CodenationService = require("./app/services/CodenationServices");
const CesarCipherService = require("./app/services/CesarCipherService");

setTimeout(async function() {
  try {
    const anwser = await CodenationService.generateData();
    const cipherDecoded = CesarCipherService.decode(
      anwser.cifrado,
      anwser.numero_casas
    );
    anwser.decifrado = cipherDecoded;
    anwser.resumo_criptografico = sha1(cipherDecoded);
    fs.writeFile(
      path.resolve(__dirname, "..", "output", "answer.json"),
      JSON.stringify(anwser),
      function(err) {
        if (err) {
          return console.log(err);
        }
      }
    );
    const score = await CodenationService.submitSolution();
    console.log(score);
  } catch (error) {
    console.log(error);
  }
}, 0);
