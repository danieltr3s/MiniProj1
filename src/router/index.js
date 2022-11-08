import { createRouter, createWebHashHistory } from "vue-router";
import AboutMe from "../components/AboutMe.vue";
import MySkills from "../components/MySkills.vue";
import MyHobbies from "../components/MyHobbies.vue";

const routes = [
  {
    path: "/",
    alias: ["/home", "/index"],
    redirect: "/about"
  },
  {
    path: "/about",
    name: "about",
    component: AboutMe,
    meta: {
      title: "Quem sou eu",
    }
  },
  {
    path: "/skills",
    name: "skills",
    component: MySkills,
    meta: {
      title: "O que faço",
    }
  },
  {
    path: "/hobbies",
    name: "hobbies",
    component: MyHobbies,
    meta: {
      title: "Hobbies",
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;