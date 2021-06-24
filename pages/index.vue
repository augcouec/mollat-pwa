<template>
  <section class="container">
    <div class="container__header">
      <h3>Selectionné pour <span>vous</span></h3>
      <hr />
    </div>
    <div class="container__dossier">
      <Dossier></Dossier>
      <Dossier></Dossier>
      <Dossier></Dossier>
      <button>Voir tout</button>
    </div>
    <div>
      <h2>Mollat</h2>
    </div>
    <div class="container__event">
      <div class="event-title">
        <h3>Evenement à venir</h3>
        <hr />
      </div>
      <Event></Event>
      <Event></Event>
    </div>
    <div class="container__header">
      <h3>Coups de coeur <span>Mollat</span></h3>
      <hr />
    </div>
    <div class="container__heart">
      <Heart></Heart>
      <Heart></Heart>
      <Heart></Heart>
    </div>
    <div class="container__header">
      <h3>Sur nos <span>médias</span></h3>
      <hr />
    </div>
    <div class="container__media">
      <h5>Podcast</h5>
      <div class="container__media-content">
        <Podcast></Podcast>
        <Podcast></Podcast>
        <Podcast></Podcast>
        <Podcast></Podcast>
      </div>
      <h5>Vidéos</h5>
      <div class="container__media-content">
        <Video></Video>
        <Video></Video>
        <Video></Video>
        <Video></Video>
      </div>
    </div>
  </section>
</template>

<script>
import Dossier from '@/components/cards/Dossier'
import Event from '@/components/cards/Event'
import Heart from '@/components/cards/Heart'
import Podcast from '@/components/cards/Podcast'
import Video from '@/components/cards/Video'

export default {
  name: 'PageHome',
  components: {
    Dossier,
    Event,
    Heart,
    Podcast,
    Video,
  },
  computed: {},
}
</script>

<style scoped lang="scss">
.container {
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;

  &__header {
    background-color: $color-primary;
    width: 80%;
    padding: 1rem;
    border-radius: 5px;
    margin-top: 1rem;
  }

  &__header h3 {
    font-family: $font-heading;
    font-size: 2rem;
    color: #fff;
  }
  &__header span {
    color: transparent;
    font-family: $font-heading;
    -webkit-text-stroke: 0.5px #fff;
    font-size: 2rem;
  }
  &__header hr {
    width: 2.5rem;
    height: 5px;
    border: none;
    background-color: #fff;
    margin: 1rem 0.5rem 1rem 0.5rem;
  }
  button {
    border: 1px solid $color-primary;
    background-color: transparent;
    font-family: $font-heading;
    margin: 1rem;
    color: $color-primary;
    font-size: 1.2rem;
    border-radius: 5px;
    min-width: 130px;
    min-height: 40px;
  }
  &__dossier {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    -webkit-text-stroke: 0.5px $color-primary;
    color: transparent;
    font-size: 6rem;
    margin: 1.5rem 0 -1.5rem 0;
  }
  &__event {
    background-color: $color-primary;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  &__event h3 {
    font-family: $font-heading;
    font-size: 1.6rem;
    color: #fff;
  }
  &__event hr {
    width: 2.5rem;
    height: 5px;
    border: none;
    background-color: #fff;
    margin: 1rem 0.5rem 1rem 0;
  }
  &__heart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  &__media h5 {
    font-size: 1.4rem;
    font-family: $font-heading;
    color: $color-primary;
    font-weight: 500;
    margin: 1rem 0 1rem 0;
    align-self: flex-start;
  }
  &__media-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
.event-title {
  align-self: flex-start;
}
</style>
