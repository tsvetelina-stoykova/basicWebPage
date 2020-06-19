<template>
  <div class="methods">
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
            <br>
            <button
                @click="addNumbers"
            >ADD</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ComputedProperty',
  
  data() {
      return {
            firstNumber: null,
            secondNumber: null,
            total: 0
      }
  },
  
  methods:{
    addNumbers(){
        this.total = parseInt(this.firstNumber) + parseInt(this.secondNumber)
    }

    }
    
    

}

</script>>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq' 

</style>