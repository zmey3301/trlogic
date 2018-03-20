<template>
	<header class="header">
		<router-link to="/"
                     class="header__item"
                     :class="{_active: $route.path === '/'}"
		>Главная</router-link>
		<router-link to="/cart"
                     class="header__item header__item--cart"
                     :class="{_active: $route.path === '/cart'}"
                     :data-qty="$store.getters.cartLength"
		>Корзина</router-link>
	</header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'header-menu',
    computed: mapGetters(['cartLength'])
}
</script>

<style lang="stylus" scoped>
.header
    align-items: stretch
    background-color: $colorDPrimary
    box-shadow: 0 1px 3px 1px rgba(black, .1), 0 1px 5px 5px rgba(black, .05)
    display: flex
    height: $heightHeader
    justify-content: space-between
    padding: 1rem 2rem 0
    position: fixed
    top: 0
    width: 100%
    z-index: 99999

    &__item
        border-bottom: 2px solid transparent
        color: $colorText
        display: block
        font-size: 1.75rem
        padding-bottom: 1rem
        text-decoration: none
        transition: color .4s, border-color .4s

        &:hover
        &._active
            color: $colorAccent

        &._active
            border-bottom-color: $colorAccent

        &--cart[data-qty]:not([data-qty="0"])
            position: relative

            &:after
                background-color: $colorAccent
                border-radius: 100%
                color: $colorText
                content: attr(data-qty)
                font-size: 1.5rem
                line-height: 2rem
                position: absolute
                right: 0
                square(2rem)
                text-align: center
                top: 0
                transform: translate(50%, -25%)
</style>
