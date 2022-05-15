import Axios from "axios";

const baseUrl = "https://assessment.api.vweb.app";

const $http = Axios.create({
  baseURL: baseUrl,
 timeout: 10000,
});

export default $http;
