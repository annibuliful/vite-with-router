<template>
  <div>{{ counter }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    return {
      counter
    };
  }
};
</script>
