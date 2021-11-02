import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import book_data from './books.js'

let data = {
  books: book_data,
  favorites = []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
