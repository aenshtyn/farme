import api from "./api";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function usePatrons() {
    const patron = ref([]);
    const patrons = ref([]);

    const errors = ref("");
    const router = useRouter();

    const getPatrons = async() => {
        let response = await api.get("/patrons");
        patrons.value = response.data.data;
    };

    const getPatron = async(id) => {
        let response = await api.get(`/patrons/` + id);
        patron.value = response.data.data;
    };

    const storePatron = async(data) => {
        errors.value = "";
        try {
            await api.post("/patrons", data);
            await router.push({ name: "patrons.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };

    const updatePatron = async(id) => {
        errors.value = "";
        try {
            await api.patch("/patrons/" + id, patron.value);
            await router.push({ name: "patrons.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };
    const destroyPatron = async(id) => {
        await api.delete('/patrons/' + id);
    };

    return {
        errors,
        patron,
        patrons,
        getPatron,
        getPatrons,
        storePatron,
        updatePatron,
        destroyPatron,
    };
}