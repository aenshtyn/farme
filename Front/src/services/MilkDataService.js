import http from "../http-common";
class MilkDataService {
    getAll() {
        return http.get("/milks");
    }

    get(id) {
        return http.get(`/milks/${id}`);
    }
    create(data) {
        return http.post("/milks", data);
    }
    update(id, data) {
        return http.put(`/milks/${id}`, data);
    }
    delete(id) {
        return http.delete(`/milks/${id}`);
    }
    deleteAll() {
        return http.delete(`/milks`);
    }
}

export default new MilkDataService