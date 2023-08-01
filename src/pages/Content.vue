<template>
  <div id="content" class="flexCenter">
    <div class="listContainer">
      <span v-for="(item, index) in list" :key="index"
        >{{ item }} - {{ index + 1 }}</span
      >
    </div>
    <input
      id="inpt"
      type="text"
      placeholder="ekle"
      style="margin-block: 10px"
    />
    <input type="number" placeholder="sil" style="margin-block: 10px" />
    <button @click="addItem" style="width: 50px">Ekle</button>
    <button @click="deleteItem" style="width: 50px">Sil</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['ata', 'nazlı', 'eylül', 'mert', 'Hüsnü'],
    };
  },
  methods: {
    addItem() {
      let element = document.getElementById('inpt');
      let inputValue = element.value;
      this.list.push(inputValue);
      element.value = '';
    },
    deleteItem() {
      let element = document.getElementsByTagName('input').item(0);
      let inputValue = element.value - 1;
      if (inputValue >= this.list.length || inputValue < 1) {
        alert('bu index yok');
      } else {
        this.list.splice(inputValue, 1);
      }
    },
  },
};
</script>

<style scoped>
#content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.listContainer {
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(203, 203, 203);
  min-width: 200px;
  min-height: 200px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
</style>
