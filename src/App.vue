<template>
  <div>
    <div>
      {{ counter }}
    </div>
    <button @click="increment">increment</button>
    <div>total{{ total }}</div>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { useEffect, useState } from "./utils/ReactHook";
const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => setCounter(++counter.value);
  useEffect(() => {
    setCounter(100);
  }, []);
  return {
    increment,
    counter,
  };
};
const useTotal = (params: { counter: Ref<number> }) => {
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setTotal(params.counter.value * 2 ?? 0);
  }, [params.counter]);
  return {
    total,
  };
};
const { counter, increment } = useCounter();
const { total } = useTotal({ counter });
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
