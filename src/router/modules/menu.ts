import Layout from '@/layout/index.vue'
const route = [
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu-1',
    meta: { title: 'message.menu.menu.name', icon: 'el-icon-s-grid' },
    children: [
      {
        path: 'menu-1',
        component: () => import('@/views/main/menu/index.vue'),
        redirect: '/menu/menu-1/menu-1-1',
        meta: { title: 'message.menu.menu.menu_1' },
        children: [
          {
            path: 'menu-1-1',
            component: () => import('@/views/main/menu/index.vue'),
            redirect: '/menu/menu-1/menu-1-1/menu-1-1-1',
            meta: { title: 'message.menu.menu.menu_1_1' },
            children: [
              {
                path: 'menu-1-1-1',
                component: () => import('@/views/main/menu/menu-1/menu-1-1/menu-1-1-1.vue'),
                meta: { title: 'message.menu.menu.menu_1_1_1' },
              },
              {
                path: 'menu-1-1-2',
                component: () => import('@/views/main/menu/menu-1/menu-1-1/menu-1-1-2.vue'),
                meta: { title: 'message.menu.menu.menu_1_1_2' },
              },
            ]
          },
          {
            path: 'menu-1-2',
            component: () => import('@/views/main/menu/menu-1/menu-1-2.vue'),
            meta: { title: 'message.menu.menu.menu_1_2' },
          },
        ]
      },
      {
        path: 'menu-2',
        component: () => import('@/views/main/menu/menu-2.vue'),
        meta: { title: 'message.menu.menu.menu_2' }
      },
      {
        path: 'menu-3',
        component: () => import('@/views/main/menu/menu-3.vue'),
        meta: { title: 'message.menu.menu.menu_3' }
      },
    ]
  }
]

export default route