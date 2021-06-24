<template>
  <div class="nav-container">
    <nuxt-link to="/" class="nav-bar">
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        aria-labelledby="homeAltIconTitle"
        stroke="#001689"
        stroke-width="1"
        stroke-linecap="square"
        stroke-linejoin="miter"
        fill="none"
        color="#001689"
      >
        <title id="homeAltIconTitle">Home</title>
        <path d="M3 10.182V22h18V10.182L12 2z" />
        <rect width="6" height="8" x="9" y="14" />
      </svg>
      Home
    </nuxt-link>
    <nuxt-link to="/search" class="nav-bar">
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        aria-labelledby="searchIconTitle"
        stroke="#001689"
        stroke-width="1"
        stroke-linecap="square"
        stroke-linejoin="miter"
        fill="none"
        color="#001689"
      >
        <title id="searchIconTitle">Search</title>
        <path d="M14.4121122,14.4121122 L20,20" />
        <circle cx="10" cy="10" r="6" />
      </svg>
      Search
    </nuxt-link>
    <nuxt-link to="/categories" class="nav-bar">
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        aria-labelledby="gridLargeIconTitle"
        stroke="#001689"
        stroke-width="1"
        stroke-linecap="square"
        stroke-linejoin="miter"
        fill="none"
        color="#001689"
      >
        <title id="gridLargeIconTitle">Large Grid</title>
        <rect width="7" height="7" x="3" y="3" />
        <rect width="7" height="7" x="14" y="3" />
        <rect width="7" height="7" x="3" y="14" />
        <rect width="7" height="7" x="14" y="14" />
      </svg>
      Categories
    </nuxt-link>
    <nuxt-link to="/Article" class="nav-bar">
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        aria-labelledby="userIconTitle"
        stroke="#001689"
        stroke-width="1"
        stroke-linecap="square"
        stroke-linejoin="miter"
        fill="none"
        color="#001689"
      >
        <title id="userIconTitle">User</title>
        <path
          stroke-linecap="round"
          d="M5.5,19.5 C7.83333333,18.5 9.33333333,17.6666667 10,17 C11,16 8,16 8,11 C8,7.66666667 9.33333333,6 12,6 C14.6666667,6 16,7.66666667 16,11 C16,16 13,16 14,17 C14.6666667,17.6666667 16.1666667,18.5 18.5,19.5"
        />
        <circle cx="12" cy="12" r="10" />
      </svg>
      User
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 10vh;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
.nav-container img {
  width: 30px;
}
.nav-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: #001689;
  text-decoration: none;
}
</style>
