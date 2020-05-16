import Home from "../views/Home.vue";
const routes = [
  // home
  {
    path: "/dispak",
    name: "Home",
    component: Home
  },
  // about
  {
    path: "/about-dipsak",
    name: "About",
    component: () => import("../views/About.vue")
  },
  // auth
  {
    path: "/dipsak-member-login",
    name: "Login",
    component: () => import("../components/Auth/Login.vue")
  },
  {
    path: "/dipsak-member-password-reset",
    name: "LoginHelp",
    component: () => import("../components/Auth/LoginHelp.vue")
  },
  // member
  {
    path: "/dipsak-members",
    name: "Members",
    component: () => import("../components/Members/Members.vue")
  },
  // contacts
  {
    path: "/dipsak-contacts",
    name: "Contacts",
    component: () => import("../components/parts/Contacts.vue")
  },
  // member dashboard
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../components/Dispak/Dashboard.vue")
  },
  // member settings
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../components/Dispak/Settings.vue")
  },
  // member calender
  {
    path: "/calender",
    name: "Calender",
    component: () => import("../components/Dispak/Calender.vue")
  },
];

export default routes;
