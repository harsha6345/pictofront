import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Edit from "./pages/Edit.vue";
import Projects from "./pages/Projects.vue";
import Roadmaps from "./pages/Roadmaps.vue";
import Editor from "./pages/Editor.vue";
import Blogs from "./pages/Blogs.vue";
import About from "./pages/About.vue";
import createBlogs from "./pages/BlogEditor.vue";
import BlogEditorVue from "./pages/BlogEditor.vue";
import Subheadings from "./pages/adminControls/subHeadings.vue";
import BlogView from "./pages/BlogView.vue";
import TutorialView from "./pages/TutorialView.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import createProject from "./pages/createProject.vue";
import ProjectView from "./pages/ProjectView.vue";
import Dashboard from "./pages/adminControls/Dashboard.vue";
import Headings from "./pages/adminControls/Headings.vue";
import Content from "./pages/adminControls/Content.vue";
import RoadmapList from "./pages/RoadmapList.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/roadmaplist",
    name: "RoadmapList",
    component: RoadmapList,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/projects/create",
    name: "CreateProjects",
    component: createProject,
  },
  {
    path: "/projects/:slug",
    name: "ProjectsView",
    component: ProjectView,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/blogs/:slug",
    name: "BlogView",
    component: BlogView,
  },
  {
    path: "/learn/:slug",
    name: "TutorialView",
    component: TutorialView,
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
    path: "/blogs/create",
    name: "createBlogs",
    component: BlogEditorVue,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  //Admin controls

  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/admin/:slug",
    name: "Headings",
    component: Headings,
  },

  {
    path: "/admin/:course/:heading",
    name: Subheadings,
    component: Subheadings,
  },
  {
    path: "/admin/:course/:heading/:subheading",
    name: Content,
    component: Content,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
