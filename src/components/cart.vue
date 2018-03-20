<template>
  <div class="container">
    <div class="cart">
        <transition-group class="cart__list"
                          tag="div"
                          :name="$adaptive.is.mobile ? 'slide-fade' : 'fade'"
                          v-if="cartLength"
        >
          <product v-for="item in items"
                   :key="item.id"
                   :id="item.id"
                   type="cart"
                   class="cart__list-item"
          />
        </transition-group>
      <transition name="fade">
        <div class="cart__list-empty" v-if="!cartLength">
          Добавьте позиции в корзину!
        </div>
      </transition>
      <div class="divider"></div>
      <transition name="fade">
        <div class="cart__footer" v-if="cartLength">
          <div class="cart__footer-cost">{{cartCost}} <span class="cart__footer-cost-sign">&#8381;</span></div>
          <div class="cart__footer-reset btn" @click="clearCart">Очистить корзину</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import {mapGetters, mapState, mapMutations} from 'vuex'
import Product from './product'
export default {
    components: {Product},
    name: 'cart',
    computed: {
        items () {
            return _.reverse(_.clone(this.$store.state.cart))
        },
        ...mapState([
            'cart'
        ]),
        ...mapGetters([
            'cartCost',
            'cartLength'
        ])
    },
    methods: mapMutations(['clearCart'])
}
</script>

<style lang="stylus" scoped>
.cart
    padding-top: 2rem
    &__list
        display: flex
        flex-wrap: wrap
        justify-content: space-around
        margin-bottom: 2rem
        padding: 0 1.5rem
        width: 100%

        .mobile &
            padding: 0 .7rem

        &-item
            width: calc(100% / 3 - 1rem)

            .tablet &
                width: calc(50% - 1rem)

            .mobile &
                width: 100%

        &-empty
            font-size: 2.3rem
            font-weight: 400
            line-height: 3rem
            text-align: center

    &__footer
        align-items: center
        display: flex
        justify-content: space-between
        margin: 0 auto
        width: 75%

        .mobile &
            flex-direction: column

        &-cost
            font-size: 2.5rem
            font-weight: 400
            text-align: center

            &-sign
                color: $colorPrimary
</style>
