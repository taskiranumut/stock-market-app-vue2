<script>
export default {
  name: "DataSetButtons",
  data() {
    return {
      selectedButton: "daily",
    };
  },
};
</script>

<template>
  <v-btn-toggle
    v-model="selectedButton"
    tile
    color="secondary"
    group
    class="primary-border"
  >
    <v-btn value="daily"> Daily </v-btn>
    <v-btn value="weekly"> Weekly </v-btn>
    <v-btn value="monthly"> Monthly </v-btn>
  </v-btn-toggle>
</template>

<style scoped>
.primary-border {
  border: 2px solid gray;
  border-radius: 5px;
}
</style>
