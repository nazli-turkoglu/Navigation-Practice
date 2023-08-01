<template>
  <div id="navbar">
    <ul>
      <li>
        <router-link
          tag="span"
          class="r-link"
          exact-active-class="active"
          to="/home"
          >Home
        </router-link>
      </li>
      <li>
        <router-link
          tag="span"
          class="r-link"
          exact-active-class="active"
          to="/about"
        >
          About
        </router-link>
      </li>
      <li>
        <router-link
          tag="span"
          class="r-link"
          exact-active-class="active"
          to="/products"
        >
          Products
        </router-link>
      </li>
      <li>
        <router-link
          tag="span"
          class="r-link"
          exact-active-class="active"
          to="/brands"
          >Brands</router-link
        >
      </li>
      <li>
        <router-link
          tag="span"
          class="r-link"
          exact-active-class="active"
          to="/contact"
          >Contact</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#navbar {
  height: 100%;
  width: fit-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #415a77;
  color: aliceblue;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

li {
  list-style: none;
}

.r-link {
  position: relative;
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  text-transform: uppercase;
  color: #222;
  font-size: 22px;
  font-weight: bold;
  transition: 0.5s;
  margin-block: 1rem;
  cursor: pointer;
}

.r-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scaleY(2);
  transition: 0.5s;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

.r-link:hover::before {
  transform: scaleY(1.2);
  opacity: 1;
}

.r-link::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #222;
  transition: 0.5s;
  transform: scale(0);
  z-index: -1;
}

.r-link:hover::after {
  transform: scale(1);
}

.r-link:hover {
  color: white;
}

.slink {
  margin-top: 50px;
  text-decoration: none;
}
.active {
  color: white;
}
.exact-active {
  color: white;
}
</style>
