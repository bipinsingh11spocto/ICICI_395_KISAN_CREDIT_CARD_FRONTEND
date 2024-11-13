import axios from "axios";

/*
 * Here we are using axios for all API Call
*/
const HttpClient = {
  get: (url) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(url);
        resolve(response);
      } catch (error) {
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error.request.data);
        } else {
          reject(error);
        }
      }
    });
  },
  post: (url, data, headers) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(url, data);
        resolve(response);
      } catch (error) {
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error.request.data);
        } else {
          reject(error);
        }
      }
    });
  },
};

export default HttpClient;