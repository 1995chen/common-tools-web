export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/develop',
    name: 'develop',
    icon: 'code',
    routes: [
      {
        path: '/develop/format',
        name: 'format',
        icon: 'smile',
        component: './Develop/format',
      },
    ],
  },
  {
    component: './404',
  },
];
/**
 * doc https://beta-pro.ant.design/docs/layout-cn
  设置/develop自动跳转第一个menu
  {
    path: '/develop',
    redirect: '/develop/json',
  }
  左侧菜单是否显示
  layout: {
    hideMenu: true,
    hideNav: true,
    hideFooter: true,
  },
 * 
  block  https://github.com/ant-design/pro-blocks
  umi block add https://github.com/ant-design/pro-blocks/tree/master/EmptyPage --path=/xxx --name=xxx
 */
