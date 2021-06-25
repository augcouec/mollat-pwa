<template>
  <section class="container">
    <div class="container__header">
      <h3>Selectionné pour <span>vous</span></h3>
      <hr />
    </div>
    <div class="container__dossier">
      <Dossier
        :image="'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'"
        :title="'Escape Game géant, le trône de fer'"
      ></Dossier>
      <Dossier
        :image="'https://images.unsplash.com/photo-1472068996216-8c972a0af9bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1354&q=80'"
        :title="'La semaine du livre polar'"
      ></Dossier>
      <Dossier
        :image="'https://images.unsplash.com/photo-1466583985723-b74122659346?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80'"
        :title="'Le design, 4 oeuvres qui changent la donne'"
      ></Dossier>
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
      <Event
        :image="'https://images.unsplash.com/photo-1600711847896-ea25db3164e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'"
        :title="'Superman, le boyscout multi-facettes'"
      ></Event>
      <Event
        :image="'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2809&q=80'"
        :title="'Prix du Livre du Réel : les Lauréats 2021 !'"
      ></Event>
    </div>
    <div class="container__header">
      <h3>Coups de coeur <span>Mollat</span></h3>
      <hr />
    </div>
    <div class="container__heart">
      <Heart
        :image="'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1572&q=80'"
        :title="'Matt Ridley'"
      ></Heart>
      <Heart
        :image="'https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=734&q=80'"
        :title="'La Victoire en Pleurant'"
      ></Heart>
      <Heart
        :image="'https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'"
        :title="'Si tu me voyais'"
      ></Heart>
    </div>
    <div class="container__header">
      <h3>Sur nos <span>médias</span></h3>
      <hr />
    </div>
    <div class="container__media">
      <h5>Podcast</h5>
      <div class="container__media-content">
        <Podcast :title="'Anne-Sophie Clerc'"></Podcast>
        <Podcast :title="'Jean Gabin'"></Podcast>
        <Podcast :title="'Marc Lévy'"></Podcast>
        <Podcast :title="'Guillaume Musso'"></Podcast>
      </div>
      <h5>Vidéos</h5>
      <div class="container__media-content">
        <Video
          :image="'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'"
          :title="'Jean Dinos'"
        ></Video>
        <Video
          :image="'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'"
          :title="'Mélanie Dupont'"
        ></Video>
        <Video
          :image="'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80'"
          :title="'Jeanne Bazlaire'"
        ></Video>
        <Video
          :image="'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'"
          :title="'Edouard Debayle'"
        ></Video>
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
  data() {
    return {
      title: 'Example blog post',
    }
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
