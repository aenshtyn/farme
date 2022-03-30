import { createWebHistory, createRouter } from "vue-router";

const routes = [{
        path: "/",
        alias: "/dashboard",
        name: "dashboard",
        component: () =>
            import ("./components/Dashboard")
    },
    {
        path: "/production",
        alias: "/production",
        name: "production",
        component: () =>
            import ("./components/Production")
    },
    {
        path: "/inventory",
        alias: "/inventory",
        name: "inventory",
        component: () =>
            import ("./components/Inventory")
    },
    {
        path: "/hr",
        alias: "/hr",
        name: "hr",
        component: () =>
            import ("./components/Hr")
    },
    {
        path: "/products",
        alias: "/products",
        name: "products",
        component: () =>
            import ("./components/Products")
    },
    {
        path: "/animals/cows",
        alias: "/cows",
        name: "cows",
        component: () =>
            import ("./components/Animals/AnimalList.vue")
    },
    {
        path: "/animals/cows/add",
        alias: "/cows/add",
        name: "add-cows",
        component: () =>
            import ("./components/Animals/AnimalRegistration.vue")
    },
    {
        path: "/signup",
        alias: "/signup",
        name: "signup",
        component: () =>
            import ("./components/registration/Register.vue")
    },
    {
        path: "/profile",
        alias: "/profile",
        name: "profile",
        // lazy-loaded
        component: () =>
            import ("./components/Profile.vue"),
    },
    {
        path: "/login",
        alias: "/login",
        name: "login",
        component: () =>
            import ("./components/registration/Login.vue")
    },



];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;