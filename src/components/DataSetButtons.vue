<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "DataSetButtons",
  data() {
    return {
      selectedButton: "daily",
    };
  },
  methods: {
    ...mapActions(["getSymbolDataFromApi"]),
    ...mapMutations(["SET_CURRENT_SYMBOL_DATA"]),
  },
  computed: {
    ...mapGetters({
      weekly: "_getWeeklyQuery",
      monthly: "_getMonthlyQuery",
    }),
    ...mapState(["symbolDatas"]),
  },
  watch: {
    async selectedButton() {
      if (this.selectedButton === "daily") {
        this.SET_CURRENT_SYMBOL_DATA(this.symbolDatas.dailyDataSet);
      } else if (this.selectedButton === "weekly") {
        if (this.symbolDatas.weeklyDataSet) {
          this.SET_CURRENT_SYMBOL_DATA(this.symbolDatas.weeklyDataSet);
        } else {
          await this.getSymbolDataFromApi(this.weekly);
          this.SET_CURRENT_SYMBOL_DATA(this.symbolDatas.weeklyDataSet);
        }
      } else {
        if (this.symbolDatas.monthlyDataSet) {
          this.SET_CURRENT_SYMBOL_DATA(this.symbolDatas.monthlyDataSet);
        } else {
          await this.getSymbolDataFromApi(this.monthly);
          this.SET_CURRENT_SYMBOL_DATA(this.symbolDatas.monthlyDataSet);
        }
      }
    },
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
