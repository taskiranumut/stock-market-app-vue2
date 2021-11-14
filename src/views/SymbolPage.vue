<script>
export default {
  name: "SymbolPage",
  data() {
    return {
      selectedButton: "daily",
    };
  },
};
</script>

<template>
  <div>
    <v-container class="mt-10">
      <!-- Name -->
      <v-row>
        <v-col>
          <h1>Company Name</h1>
        </v-col>
      </v-row>

      <!-- Button groups -->
      <v-row>
        <v-col
          ><h3>Select dataset</h3>
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
        </v-col>
      </v-row>

      <!-- Graphic -->
      <v-row>
        <v-col>
          <v-card elevation="2" :loading="false">
            <h1>d3.js graphic</h1>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.primary-border {
  border: 2px solid gray;
  border-radius: 5px;
}
</style>
