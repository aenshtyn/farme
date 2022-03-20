import http from "../http-common";
class AnimalDataService {
    getAll() {
        return http.get("/cows");
    }

    get(id) {
        return http.get(`/cows/${id}`);
    }
    create(data) {
        return http.post("/cows", data);
    }
    update(id, data) {
        return http.put(`/cows/${id}`, data);
    }
    delete(id) {
        return http.delete(`/cows/${id}`);
    }
    deleteAll() {
        return http.delete(`/cows`);
    }
    findByTitle(title) {
        return http.get(`/cows?title=${title}`);
    }
}

export default new AnimalDataService