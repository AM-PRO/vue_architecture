import type { RouteRecordRaw } from 'vue-router';

const todoRoutes: RouteRecordRaw[] = [
  {
    path: '/todo/list',
    name: 'todo-list',
    component: () => import('@/views/Todo/Todolist.vue'),
    meta: {
      needAuth: true,
    }
  },
];

export default todoRoutes;
