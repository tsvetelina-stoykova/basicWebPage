<template>
  <div class="props">

    <ProductList :products="products" />
    
  </div>
</template>

<script>
import ProductList from './ProductList.vue'


export default {
  name: 'Props',
  data() {
      return {
         products:[
           { type: 'Jeans', price: 80},
           { type: 'Top', price: 40},
           { type: 'Skirt', price: 64},
           { type: 'Shirt', price: 55}
         ]
      }
  },

  components: {
    ProductList,
  }
}

</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq' 
.counter
    display: block
    text-align: center
    margin-top: 5%

button
    background-color: #535353
    color: white
    border-radius: 10%
    width: 100px
    height: 40px
    
p
    padding: 2%
        
</style>
