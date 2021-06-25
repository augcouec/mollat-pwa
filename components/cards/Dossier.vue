<template>
  <div class="card">
    <nuxt-link to="/Article">
      <div class="card__header">
        <img :src="image" alt="" />
        <span>{{ title }}</span>
      </div>
      <div class="card__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
          maximus purus.
        </p>
        <div class="card__infos">
          <div>
            <img src="~/assets/icons/calendar.svg" alt="" />
            <span>21/08/2021 à 18h</span>
          </div>
          <div>
            <img src="~/assets/icons/location.svg" alt="" />
            <span>Station Ausone</span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'Dossier',
  props: ['image', 'title'],
}
</script>
<style lang="scss" scoped>
.card {
  width: 80%;
  border-bottom: 1px solid #c4c4c4;
  margin: 1rem 0 1rem 0;

  &__header {
    display: flex;
    flex-direction: column;
    font-family: $font-heading;
    font-weight: bold;
    font-size: 1.2rem;
    color: $color-primary;
  }
  &__header img {
    width: 100%;
    height: 10vh;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0.5rem;
  }
  &__description {
    margin-top: 0.5rem;
    color: #000a40;
    font-size: 0.9rem;
  }
  &__infos {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0 1rem 0;
  }
}
a {
  text-decoration: none;
}
</style>
