<template>
  <div class="card">
    <div class="card__left">
      <div class="card__type">
        <img src="~/assets/icons/play.svg" alt="" />
        <span>Interview</span>
      </div>
      <span class="card__title">Jean Dinos</span>
      <div class="card__reading-time">
        <span>53 min</span>
        <img src="~/assets/icons/time.svg" alt="" />
      </div>
    </div>

    <img class="card__right" :src="image" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: ['image'],
}
</script>
<style lang="scss" scoped>
.card {
  width: 48%;
  background-size: cover;
  background-color: #fff;
  max-height: 20vh;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  &__left {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  &__title {
    color: $color-primary;
    font-size: 0.8rem;
  }

  &__type {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    color: rgba($color: #000a40, $alpha: 0.4);
    margin-bottom: 0.5rem;
  }
  &__type span {
    margin-left: 0.5rem;
  }
  &__reading-time {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }
  &__reading-time span {
    margin-right: 0.5rem;
    color: rgba($color: #000a40, $alpha: 0.4);
  }
  &__right {
    width: 35%;
    object-fit: cover;
    border-radius: 0 5px 5px 0;
  }
}
</style>
