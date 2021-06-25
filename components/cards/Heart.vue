<template>
  <div class="card">
    <img :src="image" alt="" />
    <div class="card__right-side">
      <div class="card__libraire">
        <img src="~/assets/libraire_icon.svg" alt="" />
        <div>
          <span>Sylvain</span>
          <span>Libraire littérature</span>
        </div>
      </div>
      <span class="card__title">La victoire en pleurant</span>
      <p class="card__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
        maximus purus, ultrices dui.
      </p>
      <div class="card__reading-time">
        <img src="~/assets/icons/time.svg" alt="" />
        <span>10 min</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heart',
  props: ['image'],
}
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  width: 80%;
  max-height: 40vh;
  margin: 1rem 0 1rem 0;
  img {
    max-width: 40%;
    border-radius: 5px;
    object-fit: cover;
  }
  &__libraire {
    display: flex;
    color: $color-primary;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
  &__libraire img {
    margin-right: 1rem;
  }
  &__right-side {
    margin-left: 1rem;
  }
  &__title {
    font-size: 1.2rem;
    color: $color-primary;
    font-family: Georgia;
    margin: 0.5rem 0 0.5rem 0;
  }
  &__text {
    font-family: $font-text;
    font-weight: 300;
    font-size: 0.9rem;
    color: #000a40;
    margin: 0.5rem 0 0.5rem 0;
  }
  &__reading-time {
    font-size: 0.7rem;
  }
}
</style>
