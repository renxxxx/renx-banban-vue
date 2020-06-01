// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
import moment from 'moment'
import axios from 'axios'
import qs from 'qs'
import jquery from 'jquery'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);
Vue.prototype.$version = '20.0522.2141'
Vue.prototype.$versionIntro = '修复了已知BUG, 优化了用户体验.'
Vue.config.productionTip = false
Vue.prototype.$moment = moment;
moment.locale('zh-cn')
Vue.prototype.$store = store
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$ = jquery
window.Vue=Vue;
Vue.prototype.window=window


Vue.prototype.$attr=function(obj,keyChain){
  debugger
    if(!obj || !keyChain)
      return null;
     let keys= keyChain.split('.')
     var obj1 = obj;
     for(var i in keys){
          obj1=obj1[keys[i]];
          if(obj1==null || obj1==undefined)
              return null
     }
     return obj1;
}

Vue.directive('focus', {
	// 当被绑定的元素插入到 DOM 中时……
	inserted: function(el, attr) {
		// 聚焦元素
		if (attr.value)
			el.focus()
  },
  update: function(el, attr) {
		// 聚焦元素
		if (attr.value)
			el.focus()
	}
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
