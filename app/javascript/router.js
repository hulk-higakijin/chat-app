import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Welcome from '../javascript/pages/Welcome.vue'
Vue.use(Router)

export default new Router({
  
  // modeのデフォルトは「hashモード」です。
  mode: 'history',

  // 1. hashモード
  // routes.rbの設定は不要です。
  
  // [URLの例]
  // http://localhost:3000/#/
  // http://localhost:3000/#/article/5
  // http://localhost:3000/#/article/33
  
  // 2. historyモード
  // routes.rbの設定が必要です。
  
  // [URLの例]
  // http://localhost:3000/
  // http://localhost:3000/article/5
  // http://localhost:3000/article/33
  
  // 3. abstractモード
  // 詳細は公式サイトへ https://router.vuejs.org/ja/api/#mode 
  
  // アプリのベースURL 
  base: process.env.BASE_URL,
  
  // ルーターの設定
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'Article',
      
      // 非同期でコンポーネントを呼び出す
      // ※Homeのようにimportしたコンポーネントを設定するのでも可
      component: () => import('./components/article.vue')
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    }
  ]
  
})