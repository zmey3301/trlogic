import Vue from 'vue'
import Router from 'vue-router'
import Products from '../components/products'
import Cart from '../components/cart'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Главная',
			component: Products
		},
		{
			path: '/cart',
			name: 'Корзина',
			component: Cart
		}
	]
})
