import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route = [
  {
    path: '/document',
    component: Layout,
    redirect: '/document/intro',
    meta: { title: 'message.menu.document.name', icon: 'el-icon-document' },
    children: [
      {
        path: 'intro',
        component: createNameComponent(() => import('@/views/main/document/intro.vue')),
        meta: { title: 'message.menu.document.intro' }
      },
      {
        path: 'function',
        component: createNameComponent(() => import('@/views/main/document/function.vue')),
        meta: { title: 'message.menu.document.function' }
      },
      {
        path: 'keep-alive',
        component: createNameComponent(() => import('@/views/main/document/keepAlive.vue')),
        meta: { title: 'message.menu.document.keepAlive' }
      },
      {
        path: 'crud',
        component: createNameComponent(() => import('@/views/main/document/crud.vue')),
        meta: { title: 'message.menu.document.crud' }
      }
    ]
  }
]

export default route