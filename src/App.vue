<template>
  <div>
    <div>
      {{ counter }}
    </div>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts" setup>
import { useEffect, useState } from "./utils/ReactHook";
const [counter, setCounter] = useState<number>(0);
const increment = () => setCounter(++counter.value);
useEffect(()=>{
  setCounter(100)
},[])
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
