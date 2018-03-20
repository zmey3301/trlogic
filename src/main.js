import Vue from 'vue'
import App from './App'
import router from './router'
import Adaptive from 'vue-adaptive'
import {adaptive as adaptiveConf} from '../config/app.config'
import Vuex from 'vuex'
import Store from './store'
import VueBar from 'vuebar'

Vue.use(Vuex)
Vue.use(Adaptive, adaptiveConf)
Vue.use(VueBar)
Vue.config.productionTip = false

// Create store instance
const store = new Vuex.Store(Store)
export default new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
