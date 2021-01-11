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
    path: '/develop',
    name: 'develop',
    icon: 'code',
    routes: [
      {
        path: '/develop/format',
        name: 'format',
        component: './Develop/format',
      },
      {
        path: '/develop/crypto',
        name: 'crypto',
        component: './Develop/crypto',
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

  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin', // 权限控制
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
 */
