// import http from "../http-common";
import axios from 'axios';
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};
const API_URL = 'http://localhost:4000/api/';

class AnimalDataService {
    getAll() {
        return axios.get(API_URL + 'cows');
    }
    get(id) {
        return axios.get(API_URL + `cows/${id}`);
    }
    create(data) {
        return axios.post(API_URL + 'cows', data);
    }
    update(id, data) {
        return axios.put(API_URL + `cows/${id}`, data);
    }
    delete(id) {
        return axios.delete(API_URL + `cows/${id}`);
    }
    deleteAll() {
        return axios.delete(API_URL + `cows`);
    }
    findByTitle(title) {
        return axios.get(API_URL + `cows?title=${title}`);
    }
}

export default new AnimalDataService