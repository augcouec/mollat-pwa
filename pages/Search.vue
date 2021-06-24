<template>
  <section class="container">
    <input type="search" placeholder="Rechercher" />
  </section>
</template>

<script>
export default {
  name: 'Search',
  components: {},
  computed: {},
}
</script>

<style scoped lang="scss">
.container {
  min-height: 75vh;
  display: flex;
  justify-content: center;
}
input {
  width: 50%;
  height: 8vh;
  background-color: $color-primary;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  background-image: url('~/assets/icons/search.svg');
  background-position: 15px 15px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 50px;
  outline: none;
  font-family: $font-heading;
  color: #fff;
  font-size: 1.2rem;
}
input::placeholder {
  font-family: $font-heading;
  font-size: 1.1rem;
  color: rgba(100, 100, 100, 0.75);
}

@media (max-width: 840px) {
  input {
    width: 90%;
  }
}
</style>
