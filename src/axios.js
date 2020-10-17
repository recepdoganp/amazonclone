import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-bc95a.cloudfunctions.net/api",

  //"http://localhost:5001/clone-bc95a/us-central1/api", //API URL
});

export default instance;
