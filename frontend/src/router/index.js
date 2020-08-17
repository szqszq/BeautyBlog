import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AdminRouter from './admin';
import Customer from './customer';
// 处理重复点击一个路由报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//export default 
let router = new Router({
  routes: [
    ...AdminRouter,
    ...Customer
  ]
})

export default router;
