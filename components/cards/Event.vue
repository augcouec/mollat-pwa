<template>
  <div class="card">
    <div class="card__header">
      <img
        src="https://images.unsplash.com/photo-1600711847896-ea25db3164e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
      <div class="card__description">
        <span>Titre du dossier</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
          maximus purus.
        </p>
      </div>
    </div>

    <div class="card__infos">
      <div>
        <img src="~/assets/icons/calendar_white.svg" alt="" />
        <span>21/08/2021 à 18h</span>
      </div>
      <div>
        <img src="~/assets/icons/location_white.svg" alt="" />
        <span>Station Ausone</span>
      </div>
    </div>
  </div>
</template>
<script>
import dossier from '~/assets/data.json'

export default {
  name: 'Event',
  data() {
    return {
      dossier: [],
    }
  },
}
</script>
<style lang="scss" scoped>
.card {
  width: 90%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  &__header img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
  &__description {
    margin: -3rem 0 1rem 0;
    z-index: 10;
    color: #000a40;
    font-size: 0.9rem;
    background-color: white;
    width: 95%;
    border-radius: 5px;
    padding: 1rem;
  }
  &__description span {
    font-family: $font-heading;
    font-weight: bold;
    font-size: 1.2rem;
    color: $color-primary;
  }

  &__description p {
    margin-top: 0.5rem;
  }

  &__infos {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0 1rem 0;
    width: 95%;
    font-size: 0.9rem;
    color: #fff;
  }
}
</style>
