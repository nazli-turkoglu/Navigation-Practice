<template>
  <div id="home">
    <Header />
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from '../components/Header';
import Navbar from '../components/Navbar';
export default {
  components: { Header: Header, Navbar: Navbar },
};
</script>
<style scoped>
#home {
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  height: 91%;
  width: 100%;
}
</style>
