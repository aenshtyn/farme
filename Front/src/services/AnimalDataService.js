import api from "./api";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useCows() {
    const cow = ref([]);
    const cows = ref([]);

    const errors = ref("");
    const router = useRouter();

    const getCows = async() => {
        let response = await api.get("/cows");
        cows.value = response.data.data;
    };

    const getCow = async(id) => {
        let response = await api.get(`/cows/` + id);
        cow.value = response.data.data;
    };

    const storeCow = async(data) => {
        errors.value = "";
        try {
            await api.post("/cows", data);
            await router.push({ name: "cows.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };

    const updateCow = async(id) => {
        errors.value = "";
        try {
            await api.patch("/cows/" + id, cow.value);
            await router.push({ name: "cows.index" });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + " ";
                }
            }
        }
    };
    const destroyCow = async(id) => {
        await api.delete('/cows/' + id);
    };

    return {
        errors,
        cow,
        cows,
        getCow,
        getCows,
        storeCow,
        updateCow,
        destroyCow,
    };
}