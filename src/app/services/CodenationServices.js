require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const form = new FormData();
const path = require("path");
const fs = require("fs");

class CodenationServices {
  async generateData() {
    const res = await axios.get(
      process.env.CODENATION_API_URL + "generate-data",
      {
        params: { token: process.env.CODENATION_TOKEN }
      }
    );
    return res.data;
  }

  async submitSolution() {
    const filePath = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "output",
      "answer.json"
    );
    const readStream = fs.createReadStream(filePath);
    form.append("answer", readStream);
    const formHeaders = form.getHeaders();

    try {
      const res = await axios.post(
        process.env.CODENATION_API_URL + "submit-solution",
        form,
        {
          headers: {
            ...formHeaders,
            "Content-Type": "multipart/form-data"
          },
          params: { token: process.env.CODENATION_TOKEN }
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CodenationServices();
