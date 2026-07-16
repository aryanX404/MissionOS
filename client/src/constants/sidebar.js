import {
  LuLayoutDashboard,
  LuTarget,
  LuRepeat,
  LuWallet,
  LuBookOpen,
  LuBot,
  LuChartColumn,
  LuSettings,
} from "react-icons/lu";

export const menu = [
  {
    title: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Goals",
    icon: LuTarget,
    path: "/goals",
  },
  {
    title: "Habits",
    icon: LuRepeat,
    path: "/habits",
  },
  {
    title: "Finance",
    icon: LuWallet,
    path: "/finance",
  },
  {
    title: "Journal",
    icon: LuBookOpen,
    path: "/journal",
  },
  {
    title: "AI Coach",
    icon: LuBot,
    path: "/ai-coach",
  },
  {
    title: "Analytics",
    icon: LuChartColumn,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: LuSettings,
    path: "/settings",
  },
];
