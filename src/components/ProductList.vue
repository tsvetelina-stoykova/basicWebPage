<template>
  <div class="product-list">
      <p>This is your product list:</p>

      <Product v-for="(p, i) in products" 
        :type="p.type"
        :price="p.price"
        :key="i"
      />

  </div>
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'ProductList',
  props: {
      products: Array
  },
  data() {
      return {
           
      }
  },
  components: {
      Product
  }
}

</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq' 

</style>
