const { createRouter, createWebHashHistory } = VueRouter;
import LayoutView from '@/views/LayoutView'
import HomeView from '@/views/HomeView'
const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    redirect: '/layout/home',
    component: LayoutView,
    children: [
      {
        path: 'home',
        component: HomeView,
        meta: {
          title: '刷题',
          icon: 'records',
          showBack: false
        }
      },
      {
        path: 'history',
        component: () => import('@/views/HistoryView'),
        meta: {
          title: '最近',
          icon: 'clock-o',
          showBack: true
        }
      }
    ]
  },
  {
    path: '/exam',
    component: () => import('@/views/ExamView')
  },
  {
    path: '/result',
    component: () => import('@/views/ResultView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
