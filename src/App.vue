<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link>
      <router-link to="/about"> About</router-link>
    </nav>
    <div style="margin-top: 40px;"><router-view /></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
a {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
}
</style>
