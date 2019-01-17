// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import enLocal from 'element-ui/lib/locale/lang/en'
import zhLocal from 'element-ui/lib/locale/lang/zh-CN'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import './assets/css/bootstrap.min.css';

Vue.use(Vuex)
Vue.use(VueI18n)
const messages = {
  en: {
    lang: require('./assets/lang/en'),
    ...enLocal // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    lang: require('./assets/lang/zh'),
    ...zhLocal // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
}
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
})
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000,
  i18n: (key, value) => i18n.t(key, value)
});
Vue.config.productionTip = false
Vue.prototype.ElementUI = ElementUI;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  i18n,
  template: '<App/>'
})
