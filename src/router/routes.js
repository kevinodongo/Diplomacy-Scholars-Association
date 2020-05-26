import Home from "../views/Home.vue";
const routes = [
  // home
  {
    path: "/",
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
  // member search
  {
    path: "/dipsak-members-search",
    name: "Search",
    component: () => import("../components/Members/Search.vue")
  },
  // contacts
  {
    path: "/dipsak-contacts",
    name: "Contacts",
    component: () => import("../components/parts/Contacts.vue")
  },
  // member dashboard
  {
    path: "/members-dashboard",
    name: "Dashboard",
    component: () => import("../components/Dispak/Dashboard.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/alerts",
        name: "Alerts",
        component: () => import("../components/Dispak/@utils/Alerts")
      },
      {
        path: "/certificates",
        name: "Certificates",
        component: () => import("../components/Dispak/@utils/Certificates")
      },
      {
        path: "/statements",
        name: "Statements",
        component: () => import("../components/Dispak/@utils/Statements")
      },
    ]
  },
  // admin
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/Dispak/Admin.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../components/Dispak/@utils/Profile")
      },
      {
        path: "/all-members",
        name: "ListMembers",
        component: () => import("../components/Dispak/@utils/List")
      },
      {
        path: "/uploads",
        name: "Uploads",
        component: () => import("../components/Dispak/@utils/Uploads")
      },
      {
        path: "/events",
        name: "Events",
        component: () => import("../components/Dispak/@utils/Events")
      },
      {
        path: "/to-do",
        name: "Todo",
        component: () => import("../components/Dispak/@utils/To-do")
      },
      {
        path: "/blog",
        name: "Blog",
        component: () => import("../components/Dispak/@utils/Blog")
      },
    ]
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
  // gallery
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../components/parts/Gallery")
  },
  // upcoming
  {
    path: "/upcoming-events",
    name: "UpcomingEvents",
    component: () => import("../components/parts/Events")
  },
  // publication
  {
    path: "/publication",
    name: "Publication",
    component: () => import("../components/parts/Publication")
  },
  // 

];
export default routes;
