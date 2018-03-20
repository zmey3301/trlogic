<template>
    <div class="product" :class="`product--${type}`">
      <img :src="item.img" class="product__img"/>
      <div class="product__head">{{ item.name }}</div>
      <div class="product__divider divider"></div>
      <div class="product__body product__body--description" v-bar v-if="type === 'product'">
        <div class="product__body-wrap">{{ item.description }}</div>
      </div>
      <div class="product__body" v-else-if="type === 'cart'">
        <div class="product__body-price">Цена: <span class="product__body-value">{{ item.cost }}</span> &#8381;</div>
        <div class="product__body-amount">
          <label class="product__body-amount-label" :for="`cart-item-${id}-amount`">Количество:</label>
          <input class="product__body-amount-input"
                 :id="`cart-item-${id}-amount`"
                 min="1"
                 type="number"
                 title="Количество"
                 v-model="amount"
          />
        </div>
        <div class="product__body-subtotal">Подитог: <span class="product__body-value">{{ item.cost * amount }}</span> &#8381;</div>
      </div>
      <div class="product__submit" @click="updateCart('add')" v-if="type === 'product'">В корзину</div>
      <div class="product__submit" @click="updateCart('delete')" v-if="type === 'cart'">Удалить</div>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'product',
    props: {
        id: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            default: 'product'
        }
    },
    methods: {
        updateCart (action) {
            this.$store.commit('updateCart', {
                id: this.id,
                action
            })
        }
    },
    computed: {
        item () {
            return _.find(this.$store.state.products, product => product.id === this.id)
        },
        amount: {
            get () {
                return _.find(this.$store.state.cart, product => product.id === this.id).amount
            },
            set (amount) {
                if (!amount || parseInt(amount) < 1) amount = 1
                this.$store.commit('updateCart', {
                    id: this.id,
                    action: 'change',
                    value: parseInt(amount)
                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.product
    box-shadow: 0 1px 3px 1px rgba(black, .1), 0 1px 5px 5px rgba(black, .05)
    border-radius: 1rem
    display: grid
    grid-column-gap: 1.5rem
    grid-template-areas: 'img head' 'img divider' 'img body' 'img submit'
    grid-template-columns: 15rem auto
    grid-template-rows: 5rem 1rem auto 3.5rem
    margin-bottom: 2rem
    padding: 0

    &--cart
        grid-template-columns: 12rem auto

    .mobile &
        grid-column-gap: .5rem
        grid-template-columns: 12.5rem auto
        padding: 0

    &__img
        border-bottom-left-radius: 1rem
        border-top-left-radius: 1rem
        grid-area: img
        square(100%)
        object-fit: cover

    &__head
        align-self: center
        font-size: 2rem
        font-weight: 700
        grid-area: head
        line-height: 2.2rem
        text-align: center

    &__divider
        align-self: start
        margin: 0
        justify-self: center

    &__body
        grid-area: body

        &--description
            overflow: auto
            color: $colorSText
            font-size: 1.5rem
            font-style: italic

        &-amount
            &-input
                border: 1px solid $colorAccent
                display: inline-block
                padding-left: 5px
                width: 5rem

                .mobile &
                    height: 3rem
                    line-height: 3rem

        &-price
        &-amount
        &-subtotal
            .mobile &
                font-size: 1.5rem

        &-value
            font-weight: 700

        &-wrapper
            height: 100%
            padding-right: 4px
            width: 100%

    &__submit
        align-self: end
        background-color: $colorPrimary
        border-bottom-right-radius: 1rem
        color: $colorText
        cursor: pointer
        display: inline-block
        grid-area: submit
        line-height: 3rem
        padding: 0 2rem
        transition: background-color .4s
        user-select: none
        justify-self: right

        &:hover
            background-color: $colorAccent
</style>

<style lang="stylus">
.product__body
    .vb-dragger
        background-color: $colorPrimary
        right: 0
        transition: background-color .3s ease-out
        width: 2px

    &.vb-scrolling-phantom .vb-dragger
        background-color: $colorAccent
</style>
