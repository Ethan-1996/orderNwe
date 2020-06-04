import Vue from 'vue'
import App from './App.vue'
import router from './router'


//引入重置样式文件
import './stylesheets/reset.css';

// 引入element ui
//import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)



// var http='http://cn.taokewenan.com';
var http='/api';
Vue.prototype.http = http;


//Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
