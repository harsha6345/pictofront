import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Edit from "./pages/Edit.vue";
import Projects from "./pages/Projects.vue";
import Roadmaps from "./pages/Roadmaps.vue";
import Editor from "./pages/Editor.vue";
import Blogs from "./pages/Blogs.vue";
import About from "./pages/About.vue";
import Register from "./pages/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/editor",
    name: "Editor",
    component: Editor,
  },
  {
    path: "/roadmaps",
    name: "Roadmaps",
    component: Roadmaps,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
