import axios from "axios";
// export default axios.create({
//     baseURL: "http://localhost:4000/api/",
//     headers: {
//         "Content-type": "application/json"
//     }
// });

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};
const API_URL = 'http://localhost:4000/api/';