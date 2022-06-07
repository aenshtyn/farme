import http from "../http-common";
class MilkDataService {
    getAll() {
        return http.get('milks');
    }
    get(id) {
        return http.get(`/milks/${id}`);
    }
    create(data) {
        return http.post('/milks', data);
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


import api from "./api";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useMilks() {
    const milk = ref([]);
    const milks = ref([]);

    const errors = ref("");
    const router = useRouter();

    const getMilks = async() => {
        let response = await api.get("/milks");
        milks.value = response.data.data;
    };

    const getMilk = async(id) => {
        let response = await api.get(`/milks/` + id);
        milk.value = response.data.data;
    };

    const storeMilk = async(data) => {
        errors.value = "";
        try {
            await api.post("/milks", data);
            await router.push({ name: "milks.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };

    const updateMilk = async(id) => {
        errors.value = "";
        try {
            await api.patch("/milks/" + id, milk.value);
            await router.push({ name: "milks.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };
    const destroyMilk = async(id) => {
        await api.delete('/milks/' + id);
    };

    return {
        errors,
        milk,
        milks,
        getMilk,
        getMilks,
        storeMilk,
        updateMilk,
        destroyMilk,
    };
}