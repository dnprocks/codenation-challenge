require("dotenv").config();
const axios = require("axios");

class CodenationServices {
  async getCypher() {
    const res = await axios.get(
      process.env.CODENATION_API_URL + "generate-data",
      {
        params: { token: process.env.CODENATION_TOKEN }
      }
    );
    return res.data;
  }
}

module.exports = new CodenationServices();
