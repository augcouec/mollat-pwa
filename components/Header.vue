<template>
  <div class="logo-container">
    <img src="~/assets/logomollat.png" alt="logo mollat" />
  </div>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
}
.logo-container img {
  width: 50px;
}
</style>
