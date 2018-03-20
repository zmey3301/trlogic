<template>
  <div class="container">
    <div class="products">
      <product v-for="item in $store.state.products"
               :key="item.id"
               :id="item.id"
               :img="item.img"
               :name="item.name"
               :description="item.description"
               class="products-item"
      />
    </div>
  </div>
</template>

<script>
import Product from './product'

export default {
	components: {Product},
	name: 'products'
}
</script>

<style lang="stylus" scoped>
.products
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  margin: 2rem 1.5rem 0

  .mobile &
    margin: 2rem .7rem 0

  &-item
    height: 20rem
    margin-bottom: 2rem
    width: calc(50% - 2rem)

    .no-desktop &
      width: 100%
</style>
