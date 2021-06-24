<template>
  <section>
    <div class="header">
      <div class="filter">
        <span>Genre</span>
      </div>
      <div class="filter-inactive">
        <span>Libraires</span>
      </div>
    </div>
    <div class="container">
      <div>
        <h3>Littérature</h3>
        <hr />
        <div class="container__cat">
          <button class="cat-blue">Polar</button>
          <button class="cat-blue">Théatre</button>
          <button class="cat-blue">Classique</button>
          <button class="cat-blue">Récit de voyage</button>
          <button class="cat-blue">Poesie</button>
          <button class="cat-blue">SF</button>
          <button class="cat-blue">Voir Tout</button>
        </div>
      </div>
      <div class="container__blue">
        <h4>Arts</h4>
        <hr />
        <div class="container__cat">
          <button class="cat-white">Beaux-Arts</button>
          <button class="cat-white">Design</button>
          <button class="cat-white">Architecture</button>
          <button class="cat-white">Photographie</button>
          <button class="cat-white">Cinéma</button>
          <button class="cat-white">Musique</button>
          <button class="cat-white">Voir Tout</button>
        </div>
      </div>
      <div>
        <h3>Bandes dessinées</h3>
        <hr />
        <div class="container__cat">
          <button class="cat-blue">Mangas</button>
          <button class="cat-blue">Comics</button>
          <button class="cat-blue">Jeunesse</button>
          <button class="cat-blue">Humour</button>
          <button class="cat-blue">Indépendant</button>
          <button class="cat-blue">Adulte</button>
          <button class="cat-blue">Voir Tout</button>
        </div>
      </div>

      <div class="container__blue">
        <h4>Jeunesse</h4>
        <hr />
        <div class="container__cat">
          <button class="cat-white">Pour Jouer</button>
          <button class="cat-white">Romans</button>
          <button class="cat-white">Documentaire</button>
          <button class="cat-white">3-6 ans</button>
          <button class="cat-white">6-12 ans</button>
          <button class="cat-white">Roman VO</button>
          <button class="cat-white">Voir Tout</button>
        </div>
      </div>
      <div>
        <h3>Sciences Humaines</h3>
        <hr />
        <div class="container__cat">
          <button class="cat-blue">Philosophie</button>
          <button class="cat-blue">Sociologie</button>
          <button class="cat-blue">Ethnologie</button>
          <button class="cat-blue">Politique</button>
          <button class="cat-blue">Spiritualité</button>
          <button class="cat-blue">Histoire</button>
          <button class="cat-blue">Voir Tout</button>
        </div>
      </div>
      <div class="container__blue">
        <h4>Loisirs</h4>
        <hr />
        <div class="container__cat">
          <button class="cat-white">Tourisme</button>
          <button class="cat-white">Sport</button>
          <button class="cat-white">Nature</button>
          <button class="cat-white">Jardinage</button>
          <button class="cat-white">Cuisine</button>
          <button class="cat-white">Vin</button>
          <button class="cat-white">Voir Tout</button>
        </div>
      </div>
      <div>
        <h3>Savoir</h3>
        <hr />
        <div class="container__cat">
          <button class="cat-blue">Informatique</button>
          <button class="cat-blue">Mathématique</button>
          <button class="cat-blue">Médecine</button>
          <button class="cat-blue">Dictionnaire</button>
          <button class="cat-blue">Scolaire</button>
          <button class="cat-blue">Chimie</button>
          <button class="cat-blue">Voir Tout</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Categories',
  components: {},
  computed: {},
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin: 1rem;
}
.filter {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid $color-primary;
  padding: 1rem;
  color: $color-primary;
  font-family: $font-heading;
  font-weight: 700;
}
.filter-inactive {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba($color-primary, 0.2);
  padding: 1rem;
  color: rgba($color-primary, 0.2);
  font-family: $font-heading;
  font-weight: 700;
}

.container {
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 12vh;

  hr {
    width: 2.5rem;
    height: 5px;
    border: 0.5px solid $color-primary;
    margin: 1rem 0.5rem 1rem 0.5rem;
  }

  h3 {
    color: transparent;
    font-family: $font-heading;
    -webkit-text-stroke: 0.5px $color-primary;
    font-size: 1.6rem;
    margin: 1rem 0.5rem 1rem 0.5rem;
  }
  h4 {
    color: transparent;
    font-family: $font-heading;
    -webkit-text-stroke: 0.5px #fff;
    font-size: 1.6rem;
    margin: 1rem 0.5rem 1rem 0.5rem;
  }
  &__blue {
    background-color: $color-primary;
  }
  &__blue hr {
    width: 2.5rem;
    height: 5px;
    border: 0.5px solid #fff;
    margin: 1rem 0.5rem 1rem 0.5rem;
  }
  &__cat {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;
  }
  .cat-blue {
    padding: 1rem;
    background-color: $color-primary;
    color: #fff;
    font-family: $font-heading;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    margin: 0.5rem;
  }
  .cat-white {
    padding: 1rem;
    background-color: #fff;
    color: $color-primary;
    font-family: $font-heading;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    margin: 0.5rem;
  }
}
</style>
