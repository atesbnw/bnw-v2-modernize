import { uniqueId } from "lodash";

import {
  IconAperture,
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
    icon: IconAperture,
    href: "/",
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "Users.bc.User Management",
    icon: IconAperture,
    href: "/users",
    children: [
      {
        title: "Users.title",
        href: "/users"
      },
      {
        title: "Users.User",
        href: "/users/Ates123"
      }
    ]
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "menu.Merchants.title",
    icon: IconAperture,
    href: "/merchants",
    children: [
      {
        title: "menu.Merchants.title",
        href: "/merchants"
      },
      {
        title: "menu.Merchants.profile",
        href: "/merchants/bayi123"
      }
    ]
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "menu.Operator Management.title",
    icon: IconAperture,
    href: "/operator-management",
    children: [
      {
        title: "menu.Operator Management.title",
        href: "/operator-management"
      },
      {
        title: "menu.Operator Management.profile",
        href: "/operator-management/bayi123"
      }
    ]
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "menu.Game Management.title",
    icon: IconAperture,
    href: "/game-management",
    children: [
      {
        title: "menu.Game Management.title",
        href: "/game-management/casino-management"
      },
      {
        title: "menu.Game Management.provider",
        href: "/game-management/casino-management/EGT"
      }
    ]
    // chip: "0",
    // chipColor: "secondary",
  },

  {
    id: uniqueId(),
    title: "Tools.title",
    icon: IconAperture,
    href: "/tools"
    // chip: "0",
    // chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Reports.title",
    icon: IconAperture,
    href: "/reports/game-reports/casino-reports"
    // chip: "0",
    // chipColor: "secondary",
  },
  {
    navlabel: true,
    subheader: "Base",
  },
  {
    id: uniqueId(),
    title: "Modern",
    icon: IconAperture,
    href: "/base/",
    // chip: "New",
    // chipColor: "secondary",
  },

];

export default Menuitems;
