import { uniqueId } from "lodash";

import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconShoppingCart,
  IconAperture,
  IconLayout,
  IconSettings,
  IconHelp,
  IconZoomCode,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconBorderStyle2,
  IconLockAccess,
  IconAppWindow,
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
  // {
  //   id: uniqueId(),
  //   title: "eCommerce",
  //   icon: IconShoppingCart,
  //   href: "/base/dashboards/ecommerce",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Apps",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Contacts",
  //   icon: IconPackage,
  //   chip: "2",
  //   chipColor: "secondary",
  //   href: "/base/apps/contacts",
  // },
  //
  // {
  //   id: uniqueId(),
  //   title: "Blog",
  //   icon: IconChartDonut3,
  //   href: "/base/apps/blog/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Posts",
  //       icon: IconPoint,
  //       href: "/base/apps/blog/post",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Detail",
  //       icon: IconPoint,
  //       href: "/base/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Ecommerce",
  //   icon: IconBasket,
  //   href: "/base/apps/ecommerce/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Shop",
  //       icon: IconPoint,
  //       href: "/base/apps/ecommerce/shop",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Detail",
  //       icon: IconPoint,
  //       href: "/base/apps/ecommerce/detail/1",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "List",
  //       icon: IconPoint,
  //       href: "/base/apps/ecommerce/list",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Checkout",
  //       icon: IconPoint,
  //       href: "/base/apps/ecommerce/checkout",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Chats",
  //   icon: IconMessage2,
  //   href: "/base/apps/chats",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Users",
  //   icon: IconUserCircle,
  //   href: "/base/apps/user-profile/profile",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Profile",
  //       icon: IconPoint,
  //       href: "/base/apps/user-profile/profile",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Followers",
  //       icon: IconPoint,
  //       href: "/base/apps/user-profile/followers",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Friends",
  //       icon: IconPoint,
  //       href: "/base/apps/user-profile/friends",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Gallery",
  //       icon: IconPoint,
  //       href: "/base/apps/user-profile/gallery",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Notes",
  //   icon: IconNotes,
  //   href: "/base/apps/notes",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Calendar",
  //   icon: IconCalendar,
  //   href: "/base/apps/calendar",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Email",
  //   icon: IconMail,
  //   href: "/base/apps/email",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Tickets",
  //   icon: IconTicket,
  //   href: "/base/apps/tickets",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Pages",
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Roll Base Access',
  //   icon: IconLockAccess,
  //   href: '/theme-pages/casl',
  // },
  // {
  //   id: uniqueId(),
  //   title: "Treeview",
  //   icon: IconGitMerge,
  //   href: "/base/theme-pages/treeview",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pricing",
  //   icon: IconCurrencyDollar,
  //   href: "/base/theme-pages/pricing",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Account Setting",
  //   icon: IconUserCircle,
  //   href: "/base/theme-pages/account-settings",
  // },
  // {
  //   id: uniqueId(),
  //   title: "FAQ",
  //   icon: IconHelp,
  //   href: "/base/theme-pages/faq",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Landingpage",
  //   icon: IconAppWindow,
  //   href: "/base/landingpage",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Widgets",
  //   icon: IconLayout,
  //   href: "/base/widgets/cards",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Cards",
  //       icon: IconPoint,
  //       href: "/base/widgets/cards",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Banners",
  //       icon: IconPoint,
  //       href: "/base/widgets/banners",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Charts",
  //       icon: IconPoint,
  //       href: "/base/widgets/charts",
  //     },
  //   ],
  // },
  // {
  //   navlabel: true,
  //   subheader: "Forms",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Elements",
  //   icon: IconApps,
  //   href: "/base/forms/form-elements/autocomplete",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Autocomplete",
  //       icon: IconPoint,
  //       href: "/base/forms/form-elements/autocomplete",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Button",
  //       icon: IconPoint,
  //       href: "/base/forms/form-elements/button",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Checkbox",
  //       icon: IconPoint,
  //       href: "/base/forms/form-elements/checkbox",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Radio",
  //       icon: IconPoint,
  //       href: "/base/forms/form-elements/radio",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Date Time",
  //       icon: IconPoint,
  //       href: "/base/forms/form-elements/date-time",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Slider",
  //       icon: IconPoint,
  //       href: "/base/forms/form-elements/slider",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Switch",
  //       icon: IconPoint,
  //       href: "/base/forms/form-elements/switch",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Layout",
  //   icon: IconFileDescription,
  //   href: "/base/forms/form-layout",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Horizontal",
  //   icon: IconBoxAlignBottom,
  //   href: "/base/forms/form-horizontal",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Vertical",
  //   icon: IconBoxAlignLeft,
  //   href: "/base/forms/form-vertical",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Custom",
  //   icon: IconFileDots,
  //   href: "/base/forms/form-custom",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Wizard",
  //   icon: IconFiles,
  //   href: "/base/forms/form-wizard",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Form Validation",
  //   icon: IconFiles,
  //   href: "/base/forms/form-validation",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Quill Editor",
  //   icon: IconEdit,
  //   href: "/base/forms/form-quill",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Tables",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Basic",
  //   icon: IconBorderAll,
  //   href: "/base/tables/basic",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Collapsible",
  //   icon: IconBorderHorizontal,
  //   href: "/base/tables/collapsible",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Enhanced",
  //   icon: IconBorderInner,
  //   href: "/base/tables/enhanced",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Fixed Header",
  //   icon: IconBorderVertical,
  //   href: "/base/tables/fixed-header",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Pagination",
  //   icon: IconBorderTop,
  //   href: "/base/tables/pagination",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Search",
  //   icon: IconBorderStyle2,
  //   href: "/base/tables/search",
  // },
  // {
  //   navlabel: true,
  //   subheader: "UI",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Ui Components",
  //   icon: IconBox,
  //   href: "/base/ui-components/alert",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Alert",
  //       icon: IconPoint,
  //       href: "/base/ui-components/alert",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Accordion",
  //       icon: IconPoint,
  //       href: "/base/ui-components/accordion",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Avatar",
  //       icon: IconPoint,
  //       href: "/base/ui-components/avatar",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Chip",
  //       icon: IconPoint,
  //       href: "/base/ui-components/chip",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Dialog",
  //       icon: IconPoint,
  //       href: "/base/ui-components/dialog",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "List",
  //       icon: IconPoint,
  //       href: "/base/ui-components/list",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Popover",
  //       icon: IconPoint,
  //       href: "/base/ui-components/popover",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Rating",
  //       icon: IconPoint,
  //       href: "/base/ui-components/rating",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Tabs",
  //       icon: IconPoint,
  //       href: "/base/ui-components/tabs",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Tooltip",
  //       icon: IconPoint,
  //       href: "/base/ui-components/tooltip",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Transfer List",
  //       icon: IconPoint,
  //       href: "/base/ui-components/transfer-list",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Typography",
  //       icon: IconPoint,
  //       href: "/base/ui-components/typography",
  //     },
  //   ],
  // },
  //
  // {
  //   navlabel: true,
  //   subheader: "Charts",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Line",
  //   icon: IconChartLine,
  //   href: "/base/charts/line",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Gradient",
  //   icon: IconChartArcs,
  //   href: "/base/charts/gradient",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Area",
  //   icon: IconChartArea,
  //   href: "/base/charts/area",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Candlestick",
  //   icon: IconChartCandle,
  //   href: "/base/charts/candlestick",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Column",
  //   icon: IconChartDots,
  //   href: "/base/charts/column",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Doughtnut & Pie",
  //   icon: IconChartDonut3,
  //   href: "/base/charts/doughnut",
  // },
  // {
  //   id: uniqueId(),
  //   title: "RadialBar & Radar",
  //   icon: IconChartRadar,
  //   href: "/base/charts/radialbar",
  // },
  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  //
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/base/auth/auth1/login",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Side Login",
  //       icon: IconPoint,
  //       href: "/base/auth/auth1/login",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Boxed Login",
  //       icon: IconPoint,
  //       href: "/base/auth/auth2/login",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/base/auth/auth1/register",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Side Register",
  //       icon: IconPoint,
  //       href: "/base/auth/auth1/register",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Boxed Register",
  //       icon: IconPoint,
  //       href: "/base/auth/auth2/register",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Forgot Password",
  //   icon: IconRotate,
  //   href: "/base/auth/auth1/forgot-password",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Side Forgot Password",
  //       icon: IconPoint,
  //       href: "/base/auth/auth1/forgot-password",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Boxed Forgot Password",
  //       icon: IconPoint,
  //       href: "/base/auth/auth2/forgot-password",
  //     },
  //   ],
  // },
  //
  // {
  //   id: uniqueId(),
  //   title: "Two Steps",
  //   icon: IconZoomCode,
  //   href: "/base/auth/auth1/two-steps",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Side Two Steps",
  //       icon: IconPoint,
  //       href: "/base/auth/auth1/two-steps",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Boxed Two Steps",
  //       icon: IconPoint,
  //       href: "/base/auth/auth2/two-steps",
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Error",
  //   icon: IconAlertCircle,
  //   href: "/base/auth/error",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Maintenance",
  //   icon: IconSettings,
  //   href: "/base/auth/maintenance",
  // },
  //
  // {
  //   navlabel: true,
  //   subheader: "Other",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Menu Level",
  //   icon: IconBoxMultiple,
  //   href: "/base/menulevel/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Level 1",
  //       icon: IconPoint,
  //       href: "/base/l1",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Level 1.1",
  //       icon: IconPoint,
  //       href: "/base/l1.1",
  //       children: [
  //         {
  //           id: uniqueId(),
  //           title: "Level 2",
  //           icon: IconPoint,
  //           href: "/base/l2",
  //         },
  //         {
  //           id: uniqueId(),
  //           title: "Level 2.1",
  //           icon: IconPoint,
  //           href: "/base/l2.1",
  //           children: [
  //             {
  //               id: uniqueId(),
  //               title: "Level 3",
  //               icon: IconPoint,
  //               href: "/base/l3",
  //             },
  //             {
  //               id: uniqueId(),
  //               title: "Level 3.1",
  //               icon: IconPoint,
  //               href: "/base/l3.1",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Disabled",
  //   icon: IconBan,
  //   href: "",
  //   disabled: true,
  // },
  // {
  //   id: uniqueId(),
  //   title: "SubCaption",
  //   subtitle: "This is the sutitle",
  //   icon: IconStar,
  //   href: "",
  // },
  //
  // {
  //   id: uniqueId(),
  //   title: "Chip",
  //   icon: IconAward,
  //   href: "",
  //   chip: "9",
  //   chipColor: "primary",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Outlined",
  //   icon: IconMoodSmile,
  //   href: "",
  //   chip: "outline",
  //   variant: "outlined",
  //   chipColor: "primary",
  // },
  // {
  //   id: uniqueId(),
  //   title: "External Link",
  //   external: true,
  //   icon: IconStar,
  //   href: "https://google.com",
  // },
];

export default Menuitems;
