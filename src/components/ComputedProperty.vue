<template>
  <div class="computedProperty">
      <div class="container">
          <h2>Total: {{ total }}</h2>

           <input
                v-model="firstNumber" 
                type="number"
                placeholder="Enter First Number"
            /> 
            <p>First Number {{ firstNumber }}</p>
            <input
                v-model="secondNumber"  
                type="number"
                placeholder="Enter Second Number"
            /> 
            <p>Second Number {{ secondNumber }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ComputedProperty',
  
  data() {
      return {
            firstNumber: null,
            secondNumber: null
      }
  },

  computed:{
      total: function(){
          if(!this.firstNumber || !this.secondNumber) return
          return parseInt(this.firstNumber) + parseInt(this.secondNumber)
      }
  }
    

}

</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq' 

</style>