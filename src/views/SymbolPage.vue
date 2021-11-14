<script>
// import { mapGetters } from 'vuex';
import DataSetButtons from "@/components/DataSetButtons"

export default {
  name: "SymbolPage",
  components: {
    DataSetButtons
  },
  // computed: {
  //   ...mapGetters({
  //     dailyDates: "_getDailyDataDates"
  //   })
  // }
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
          <DataSetButtons />
        </v-col>
      </v-row>

      <!-- Graphic -->
      <v-row>
        <v-col>
          <v-card elevation="2" :loading="false">
            <h1>d3.js graphic</h1>
            <p><pre>
              Datas</pre></p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>
