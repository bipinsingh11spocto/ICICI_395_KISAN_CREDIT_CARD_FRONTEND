/*
 * It track wether host is on local or server and return the backend url.
 */
let BASE_URL;
if (window.location.hostname === "localhost") {
    BASE_URL = "http://localhost:3005/api/kisancreditcard";
} else {
    BASE_URL = `https://spocto.icicibank.com/api/kisancreditcard`;

}

export default BASE_URL