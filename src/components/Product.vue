<template>
  <div>
    <hr>
    <h3>{{ type }} ---- {{ price }}</h3>
   
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
      type: String,
      price: Number,
      validator(arr){
          return arr.every(p => typeof p.type === 'string'
          && typeof p.price === 'number')
      }
  },
  data() {
      return {
           
      }
  }
}

</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq' 

</style>
