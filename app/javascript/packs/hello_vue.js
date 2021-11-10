import Vue from 'vue'
import App from '../app.vue'
import router from '../router.js'

document.addEventListener('DOMContentLoaded', () => {

  const app = new Vue({
    router: router,
    render: h => h(App)
  }).$mount()
  
  document.getElementById('root').appendChild(app.$el)
})