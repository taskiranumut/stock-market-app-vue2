<script>
import DataSetButtons from "@/components/DataSetButtons";
import StockGraphic from "@/components/StockGraphic";
import { mapMutations } from "vuex";

export default {
  name: "SymbolPage",
  components: {
    DataSetButtons,
    StockGraphic,
  },
  data() {
    return {
      symbol: null,
    };
  },
  created() {
    if (localStorage.getItem("currentData")) {
      const currentDatas = JSON.parse(localStorage.getItem("currentData"));
      this.SET_INPUT_VALUE(currentDatas.symbol);
      this.SET_DAILY_DATAS(currentDatas.symbolData);
      this.SET_CURRENT_SYMBOL_DATA(currentDatas.symbolData);
    }
    this.symbol = this.$route.params.id;
  },
  methods: {
    ...mapMutations([
      "SET_INPUT_VALUE",
      "SET_DAILY_DATAS",
      "SET_CURRENT_SYMBOL_DATA",
    ]),
  },
  watch: {
    $route() {
      this.symbol = this.$route.params.id;
    },
  },
};
</script>

<template>
  <div>
    <v-container class="mt-10">
      <v-row>
        <v-col>
          <h1>{{ symbol.toUpperCase() }}</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          ><h3>Select dataset</h3>
          <DataSetButtons />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card elevation="2" :loading="false">
            <StockGraphic />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
