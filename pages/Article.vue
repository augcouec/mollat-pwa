<template>
  <div class="article">
    <div class="article__header">
      <h3>Le coup de <span>coeur</span></h3>
      <p>De Sylvain, libraire histoire</p>
      <img
        src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        alt=""
      />
    </div>
    <div class="article__book-info">
      <h4>La victoire en pleurant</h4>
      <hr />
      <p>
        D. Cordier retrace deux années et demie de son parcours, de la mort de
        J. Moulin en 1943 jusqu'à sa démission en 1946. Les conflits au sein de
        la direction de la Résistance, les positions des intellectuels dans le
        Paris occupé et le procès de C. Maurras font partie des sujets abordés.
        ©Electre 2021
      </p>
      <span>21,90€</span>
      <button>Commander sur le site</button>
    </div>
    <h5>Le mot de Sylvain</h5>
    <div class="article__words">
      <p>
        Ce livre m’a séduit par la beauté de ses mots et de son histoire. D.
        Cordier réussit le pari de nous embarquer avec lui dans un voyage au
        coeur de la Résistance. Les émotions sont puissantes et prennent aux
        tripes. Ce livre est un appel à l’action mais par dessus tout, un appel
        à la mémoire.
      </p>
    </div>
    <div class="article__libraire">
      <div class="article__libraire-header">
        <img src="~/assets/libraire_big.svg" alt="" />
        <span>
          Sylvain,
          <br />
          Libraire Histoire
        </span>
      </div>

      <p>
        Après une license de lettre à l’université du Mirail à Toulouse, Sylvain
        a souhaité devenir libraire. Au sein de l’équipe Mollat depuis
        maintenant 5 ans, il vous parlera mieux que quiconque de l’histoire et
        surtout des traces qu’elle a laissé dans nos bibliothèques.
      </p>
    </div>
    <h6>À très bientôt chez Mollat ou sur mollat.com !</h6>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');

.article {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    align-items: center;
  }
  &__header h3 {
    font-family: $font-heading;
    font-size: 2rem;
    color: $color-primary;
    margin-bottom: 0.7rem;
    align-self: flex-start;
  }
  &__header span {
    color: transparent;
    -webkit-text-stroke: 1px $color-primary;
  }
  &__header p {
    font-size: 1.1rem;
    color: $color-primary;
    font-family: $font-text;
    align-self: flex-start;
    font-weight: 300;
  }
  &__header img {
    width: 80%;
    box-shadow: 10px 10px 0px 0px #001689;
    margin: 1rem 0 1rem 0;
  }

  &__book-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    align-items: flex-start;
  }
  &__book-info h4 {
    font-family: $font-heading;
    font-size: 1.3rem;
    color: $color-primary;
    align-self: flex-start;
    font-weight: 500;
  }
  hr {
    width: 2.5rem;
    height: 5px;
    border: none;
    background-color: $color-primary;
    margin: 1rem 0.5rem 1rem 0;
  }
  &__book-info p {
    font-family: $font-text;
    font-size: 0.9rem;
    font-weight: 300;
    color: #000a40;
    margin-bottom: 1rem;
  }
  &__book-info span {
    font-family: $font-text;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000a40;
    margin-bottom: 1rem;
  }
  &__book-info button {
    border: none;
    background-color: $color-primary;
    font-family: $font-heading;
    margin: 1rem 0 1rem 0;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 5px;
    min-width: 150px;
    min-height: 40px;
    align-self: center;
    padding: 0 1rem 0 1rem;
  }
  H5 {
    font-family: $font-heading;
    font-size: 1.7rem;
    color: $color-primary;
    margin: 1rem 0 0.7rem 1rem;
    align-self: flex-start;
  }

  &__words {
    font-family: 'Kalam', cursive;
    background: url('~/assets/words.png');
    background-size: cover;
    background-color: $color-primary;
    color: white;
    padding: 2rem;
    font-size: 1.1rem;
    width: calc(100% - 2rem);
    border-radius: 1;
    margin: 0 1rem 1rem 1rem;
    line-height: 1.3;
    border-radius: 5px;
  }
  &__libraire {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  &__libraire-header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__libraire-header span {
    margin-left: 1rem;
    font-family: $font-text;
    font-size: 1.1rem;
    font-weight: 300;
    color: $color-primary;
  }
  &__libraire p {
    font-family: $font-text;
    font-size: 0.9rem;
    font-weight: 300;
    color: #000a40;
    margin: 1rem 0 1rem 0;
  }
  h6 {
    font-family: $font-heading;
    font-size: 1.1rem;
    color: $color-primary;
    margin-bottom: 20vh;
    width: 70%;
    text-align: center;
    align-self: center;
  }
}
</style>
