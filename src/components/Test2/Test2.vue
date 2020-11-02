<template>
  <div class="test2">
    <div>message: {{message}}</div>
  </div>
  
</template>

<script>
import {computed, ref} from 'vue'
export default {
  name: 'TestComponent2',
  setup() {
    const message = 'hello world'
    
    return {
      message,
    }
  }
}
</script>

<style lang="scss" scoped>
.test2 {
  color: blue;
}
</style>