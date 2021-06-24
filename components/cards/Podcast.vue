<template>
  <div class="card">
    <div class="card__type">
      <img src="~/assets/icons/headset.svg" alt="" />
      <span>Rencontre</span>
    </div>
    <span class="card__title">Anne-Sophie Clerc</span>
    <div class="card__reading-time">
      <span>52 min</span>
      <img src="~/assets/icons/time.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Podcast',
}
</script>
<style lang="scss" scoped>
.card {
  width: 48%;
  max-height: 20vh;
  background: url('~/assets/waves.png');
  background-size: cover;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin-bottom: 1rem;

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
}
</style>
