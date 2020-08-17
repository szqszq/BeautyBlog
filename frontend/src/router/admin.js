import Admin from '@/components/admin/admin';
import Classfiy from '@/components/admin/Classfiy';
import Article from '@/components/admin/article';

export default [
  {
    path: '/',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/admin/classfiy',
        component: Classfiy
      },
      {
        path: '/admin/article',
        component: Article
      }
    ]
  }
]