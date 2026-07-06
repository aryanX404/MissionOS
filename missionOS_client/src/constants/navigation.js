import {
  FiHome,
  FiTarget,
  FiBookOpen,
  FiBarChart2,
  FiActivity,
  FiSettings,
} from "react-icons/fi";

const navigation = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
    icon: FiHome,
  },
  {
    id: 2,
    label: "Goals",
    path: "/goals",
    icon: FiTarget,
  },
  {
    id: 3,
    label: "Journal",
    path: "/journal",
    icon: FiBookOpen,
  },
  {
    id: 4,
    label: "Analytics",
    path: "/analytics",
    icon: FiBarChart2,
  },
  {
    id: 5,
    label: "Activity",
    path: "/activity",
    icon: FiActivity,
  },
  {
    id: 6,
    label: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];

export default navigation;