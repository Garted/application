import { DashboardOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}`,
    title: 'sidenav.home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'element',
        path: `${APP_PREFIX_PATH}/home`,
        title: 'sidenav.element',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'element2',
        path: `${APP_PREFIX_PATH}/home`,
        title: 'sidenav.element',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'dropdown',
            path: `${APP_PREFIX_PATH}/home`,
            title: 'sidenav.DropdownElement',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'dropdown2',
            path: `${APP_PREFIX_PATH}/home`,
            title: 'sidenav.DropdownElement',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
    ],
  },
];
const dashBoardNavTreea = [
  {
    key: 'category',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'sidenav.category',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'element3',
        path: `${APP_PREFIX_PATH}/home`,
        title: 'sidenav.element',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: 'Board',
        path: `${APP_PREFIX_PATH}/board`,
        title: 'sidenav.board',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'analytic',
        path: `${APP_PREFIX_PATH}/home`,
        title: 'sidenav.someElement',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'dropdown3',
            path: `${APP_PREFIX_PATH}/home`,
            title: 'sidenav.drop',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'sales',
        path: `${APP_PREFIX_PATH}/default`,
        title: 'sidenav.dashboard.sales',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: 'users',
        path: `${APP_PREFIX_PATH}/users`,
        title: 'sidenav.clients',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...dashBoardNavTreea];

export default navigationConfig;
