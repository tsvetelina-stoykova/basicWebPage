<template>
  <div class="page1">
   
   <button v-on:click="counter += 1">Plus</button>
   <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  
  data() {
      return {
            counter: 1
      }
  }
}

</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq' 

</style>
