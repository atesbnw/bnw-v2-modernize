import { uniqueId } from "lodash";

import {
  IconAperture,
  IconDashboard,
  IconUsers,
  IconBuildingStore,
  IconSettings,
  IconDeviceGamepad2 as IconGamepad,
  IconTools,
  IconReport,
  IconGlobe,
  IconFileText,
  IconUserCog,
  IconColumns3,
  IconReceipt2
} from "@tabler/icons-react";
import { t } from 'i18next';

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "menu.Home",
    icon: IconDashboard,
    href: "/",
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "Users.bc.User Management",
    icon: IconUsers,
    href: "/users",
    // children: [
    //   {
    //     id: uniqueId(),
    //     title: "Users.title",
    //     href: "/users"
    //   },
    //   {
    //     id: uniqueId(),
    //     title: "Users.User",
    //     href: "/users/Ates123"
    //   }
    // ]
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "menu.Merchants.title",
    icon: IconBuildingStore,
    href: "/merchants",
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "menu.Operator Management.title",
    icon: IconUserCog,
    href: "/operator-management",
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "menu.Game Management.title",
    icon: IconGamepad,
    href: "/game-management/casino-management",
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "Tools.title",
    icon: IconTools,
    href: "/tools/bonuses"
    // chip: "0",
    // chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Reports.title",
    icon: IconReport,
    href: "/reports"
    // chip: "0",
    // chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Settings.title",
    icon: IconSettings,
    href: "/settings"
    // chip: "0",
    // chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Domain Management.title",
    icon: IconGlobe,
    href: "/domain-management"
    // chip: "0",
    // chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Content Management.title",
    icon: IconColumns3,
    href: "/content-management"
    // chip: "0",
    // chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Accounting Management.title",
    icon: IconReceipt2,
    href: "/accounting-management"
    // chip: "0",
    // chipColor: "secondary",
  },
  // {
  //   navlabel: true,
  //   subheader: "Base",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Modern",
  //   icon: IconAperture,
  //   href: "/base/",
  //   // chip: "New",
  //   // chipColor: "secondary",
  // },

];

export default Menuitems;
