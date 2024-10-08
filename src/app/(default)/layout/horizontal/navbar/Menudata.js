import {
  IconHome,
  IconPoint,
  IconApps,
  IconClipboard,
  IconFileDescription,
  IconBorderAll,
  IconZoomCode,
  IconRotate,
  IconUserPlus,
  IconLogin,
  IconAlertCircle,
  IconSettings,
} from '@tabler/icons-react';
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconHome,
    href: '/base/dashboards/',
    children: [
      {
        id: uniqueId(),
        title: 'Modern',
        icon: IconPoint,
        href: '/base/',
        chip: 'New',
        chipColor: 'secondary',
      },
      {
        id: uniqueId(),
        title: 'eCommerce',
        icon: IconPoint,
        href: '/base/dashboards/ecommerce',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Apps',
    icon: IconApps,
    href: '/base/apps/',
    children: [
      {
        id: uniqueId(),
        title: 'Contacts',
        icon: IconPoint,
        href: '/base/apps/contacts',
      },
      {
        id: uniqueId(),
        title: 'Chats',
        icon: IconPoint,
        href: '/base/apps/chats',
      },
      {
        id: uniqueId(),
        title: 'Notes',
        icon: IconPoint,
        href: '/base/apps/notes',
      },
      {
        id: uniqueId(),
        title: 'Calendar',
        icon: IconPoint,
        href: '/base/apps/calendar',
      },
      {
        id: uniqueId(),
        title: 'Email',
        icon: IconPoint,
        href: '/base/apps/email',
      },
      {
        id: uniqueId(),
        title: 'Tickets',
        icon: IconPoint,
        href: '/base/apps/tickets',
      },
      {
        id: uniqueId(),
        title: 'User Profile',
        icon: IconPoint,
        href: '/base/user-profile',
        children: [
          {
            id: uniqueId(),
            title: 'Profile',
            icon: IconPoint,
            href: '/base/apps/user-profile/profile',
          },
          {
            id: uniqueId(),
            title: 'Followers',
            icon: IconPoint,
            href: '/base/apps/user-profile/followers',
          },
          {
            id: uniqueId(),
            title: 'Friends',
            icon: IconPoint,
            href: '/base/apps/user-profile/friends',
          },
          {
            id: uniqueId(),
            title: 'Gallery',
            icon: IconPoint,
            href: '/base/apps/user-profile/gallery',
          },
        ],
      },
      {
        id: uniqueId(),
        title: 'Ecommerce',
        icon: IconPoint,
        href: '/base/apps/ecommerce/',
        children: [
          {
            id: uniqueId(),
            title: 'Shop',
            icon: IconPoint,
            href: '/base/apps/ecommerce/shop',
          },
          {
            id: uniqueId(),
            title: 'Detail',
            icon: IconPoint,
            href: '/base/apps/ecommerce/detail/1',
          },
          {
            id: uniqueId(),
            title: 'List',
            icon: IconPoint,
            href: '/base/apps/ecommerce/list',
          },
          {
            id: uniqueId(),
            title: 'Checkout',
            icon: IconPoint,
            href: '/base/apps/ecommerce/checkout',
          },
        ],
      },
      {
        id: uniqueId(),
        title: 'Blog',
        icon: IconPoint,
        href: '/base/apps/blog/',
        children: [
          {
            id: uniqueId(),
            title: 'Posts',
            icon: IconPoint,
            href: '/base/apps/blog/post',
          },
          {
            id: uniqueId(),
            title: 'Detail',
            icon: IconPoint,
            href: '/base/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
          },
        ],
      },
    ],
  },

  {
    id: uniqueId(),
    title: 'Pages',
    icon: IconClipboard,
    href: '/base/ui-components/',
    children: [
      {
        id: uniqueId(),
        title: 'Roll Base Access',
        icon: IconPoint,
        href: '/base/theme-pages/casl',
      },
      {
        id: uniqueId(),
        title: 'Treeview',
        icon: IconPoint,
        href: '/base/theme-pages/treeview',
      },
      {
        id: uniqueId(),
        title: 'Pricing',
        icon: IconPoint,
        href: '/base/theme-pages/pricing',
      },
      {
        id: uniqueId(),
        title: 'Account Setting',
        icon: IconPoint,
        href: '/base/theme-pages/account-settings',
      },
      {
        id: uniqueId(),
        title: 'FAQ',
        icon: IconPoint,
        href: '/base/theme-pages/faq',
      },
      {
        id: uniqueId(),
        title: 'Widgets',
        icon: IconPoint,
        href: '/base/widgets/cards',
        children: [
          {
            id: uniqueId(),
            title: 'Cards',
            icon: IconPoint,
            href: '/base/widgets/cards',
          },
          {
            id: uniqueId(),
            title: 'Banners',
            icon: IconPoint,
            href: '/base/widgets/banners',
          },
          {
            id: uniqueId(),
            title: 'Charts',
            icon: IconPoint,
            href: '/base/widgets/charts',
          },
        ],
      },
      {
        id: uniqueId(),
        title: 'Ui',
        icon: IconPoint,
        href: '/base/ui-components/alert',
        children: [
          {
            id: uniqueId(),
            title: 'Alert',
            icon: IconPoint,
            href: '/base/ui-components/alert',
          },
          {
            id: uniqueId(),
            title: 'Accordion',
            icon: IconPoint,
            href: '/base/ui-components/accordion',
          },
          {
            id: uniqueId(),
            title: 'Avatar',
            icon: IconPoint,
            href: '/base/ui-components/avatar',
          },
          {
            id: uniqueId(),
            title: 'Chip',
            icon: IconPoint,
            href: '/base/ui-components/chip',
          },
          {
            id: uniqueId(),
            title: 'Dialog',
            icon: IconPoint,
            href: '/base/ui-components/dialog',
          },
          {
            id: uniqueId(),
            title: 'List',
            icon: IconPoint,
            href: '/base/ui-components/list',
          },
          {
            id: uniqueId(),
            title: 'Popover',
            icon: IconPoint,
            href: '/base/ui-components/popover',
          },
          {
            id: uniqueId(),
            title: 'Rating',
            icon: IconPoint,
            href: '/base/ui-components/rating',
          },
          {
            id: uniqueId(),
            title: 'Tabs',
            icon: IconPoint,
            href: '/base/ui-components/tabs',
          },
          {
            id: uniqueId(),
            title: 'Tooltip',
            icon: IconPoint,
            href: '/base/ui-components/tooltip',
          },
          {
            id: uniqueId(),
            title: 'Transfer List',
            icon: IconPoint,
            href: '/base/ui-components/transfer-list',
          },
          {
            id: uniqueId(),
            title: 'Typography',
            icon: IconPoint,
            href: '/base/ui-components/typography',
          },
        ],
      },
      {
        id: uniqueId(),
        title: 'Charts',
        icon: IconPoint,
        href: '/base/charts/',
        children: [
          {
            id: uniqueId(),
            title: 'Line',
            icon: IconPoint,
            href: '/base/charts/line',
          },
          {
            id: uniqueId(),
            title: 'Gredient',
            icon: IconPoint,
            href: '/base/charts/gradient',
          },
          {
            id: uniqueId(),
            title: 'Area',
            icon: IconPoint,
            href: '/base/charts/area',
          },
          {
            id: uniqueId(),
            title: 'Candlestick',
            icon: IconPoint,
            href: '/base/charts/candlestick',
          },
          {
            id: uniqueId(),
            title: 'Column',
            icon: IconPoint,
            href: '/base/charts/column',
          },
          {
            id: uniqueId(),
            title: 'Doughtnut & Pie',
            icon: IconPoint,
            href: '/base/charts/doughnut',
          },
          {
            id: uniqueId(),
            title: 'RadialBar & Radar',
            icon: IconPoint,
            href: '/base/charts/radialbar',
          },
        ],
      },
      {
        id: uniqueId(),
        title: 'Auth',
        icon: IconPoint,
        href: '/base/400',
        children: [
          {
            id: uniqueId(),
            title: 'Error',
            icon: IconAlertCircle,
            href: '/base/400',
          },
          {
            id: uniqueId(),
            title: 'Maintenance',
            icon: IconSettings,
            href: '/base/auth/maintenance',
          },
          {
            id: uniqueId(),
            title: 'Login',
            icon: IconLogin,
            href: '/base/auth/auth1/login',
            children: [
              {
                id: uniqueId(),
                title: 'Side Login',
                icon: IconPoint,
                href: '/base/auth/auth1/login',
              },
              {
                id: uniqueId(),
                title: 'Boxed Login',
                icon: IconPoint,
                href: '/base/auth/auth2/login',
              },
            ],
          },
          {
            id: uniqueId(),
            title: 'Register',
            icon: IconUserPlus,
            href: '/base/auth/auth1/register',
            children: [
              {
                id: uniqueId(),
                title: 'Side Register',
                icon: IconPoint,
                href: '/base/auth/auth1/register',
              },
              {
                id: uniqueId(),
                title: 'Boxed Register',
                icon: IconPoint,
                href: '/base/auth/auth2/register',
              },
            ],
          },
          {
            id: uniqueId(),
            title: 'Forgot Password',
            icon: IconRotate,
            href: '/base/auth/auth1/forgot-password',
            children: [
              {
                id: uniqueId(),
                title: 'Side Forgot Password',
                icon: IconPoint,
                href: '/base/auth/auth1/forgot-password',
              },
              {
                id: uniqueId(),
                title: 'Boxed Forgot Password',
                icon: IconPoint,
                href: '/base/auth/auth2/forgot-password',
              },
            ],
          },
          {
            id: uniqueId(),
            title: 'Two Steps',
            icon: IconZoomCode,
            href: '/base/auth/auth1/two-steps',
            children: [
              {
                id: uniqueId(),
                title: 'Side Two Steps',
                icon: IconPoint,
                href: '/base/auth/auth1/two-steps',
              },
              {
                id: uniqueId(),
                title: 'Boxed Two Steps',
                icon: IconPoint,
                href: '/base/auth/auth2/two-steps',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Forms',
    icon: IconFileDescription,
    href: '/base/forms/form-elements/autocomplete',
    children: [
      {
        id: uniqueId(),
        title: 'Form Elements',
        icon: IconPoint,
        href: '/base/forms/form-elements/autocomplete',
        children: [
          {
            id: uniqueId(),
            title: 'Autocomplete',
            icon: IconPoint,
            href: '/base/forms/form-elements/autocomplete',
          },
          {
            id: uniqueId(),
            title: 'Button',
            icon: IconPoint,
            href: '/base/forms/form-elements/button',
          },
          {
            id: uniqueId(),
            title: 'Radio',
            icon: IconPoint,
            href: '/base/forms/form-elements/radio',
          },
          {
            id: uniqueId(),
            title: 'Date Time',
            icon: IconPoint,
            href: '/base/forms/form-elements/date-time',
          },
          {
            id: uniqueId(),
            title: 'Slider',
            icon: IconPoint,
            href: '/base/forms/form-elements/slider',
          },
          {
            id: uniqueId(),
            title: 'Switch',
            icon: IconPoint,
            href: '/base/forms/form-elements/switch',
          },
        ],
      },
      {
        id: uniqueId(),
        title: 'Form Layout',
        icon: IconPoint,
        href: '/base/forms/form-layout',
      },
      {
        id: uniqueId(),
        title: 'Form Horizontal',
        icon: IconPoint,
        href: '/base/forms/form-horizontal',
      },
      {
        id: uniqueId(),
        title: 'Form Vertical',
        icon: IconPoint,
        href: '/base/forms/form-vertical',
      },
      {
        id: uniqueId(),
        title: 'Form Custom',
        icon: IconPoint,
        href: '/base/forms/form-custom',
      },
      {
        id: uniqueId(),
        title: 'Form Wizard',
        icon: IconPoint,
        href: '/base/forms/form-wizard',
      },
      {
        id: uniqueId(),
        title: 'Form Validation',
        icon: IconPoint,
        href: '/base/forms/form-validation',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Tables',
    icon: IconBorderAll,
    href: '/base/tables/',
    children: [
      {
        id: uniqueId(),
        title: 'Basic',
        icon: IconPoint,
        href: '/base/tables/basic',
      },
      {
        id: uniqueId(),
        title: 'Collapsible',
        icon: IconPoint,
        href: '/base/tables/collapsible',
      },
      {
        id: uniqueId(),
        title: 'Enhanced',
        icon: IconPoint,
        href: '/base/tables/enhanced',
      },
      {
        id: uniqueId(),
        title: 'Fixed Header',
        icon: IconPoint,
        href: '/base/tables/fixed-header',
      },
      {
        id: uniqueId(),
        title: 'Pagination',
        icon: IconPoint,
        href: '/base/tables/pagination',
      },
      {
        id: uniqueId(),
        title: 'Search',
        icon: IconPoint,
        href: '/base/tables/search',
      },
    ],
  },
];
export default Menuitems;
