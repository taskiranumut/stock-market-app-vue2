<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "AppHeader",
  data() {
    return {
      selectedValue: "User",
      selectItems: ["User", "Admin"],
    };
  },
  methods: {
    ...mapActions(["getSymbolDataFromApi"]),
    ...mapMutations([
      "SET_INPUT_VALUE",
      "SET_CURRENT_SYMBOL_DATA",
      "RESET_INPUT_VALUE",
      "RESET_SYMBOL_DATAS",
    ]),
    async getSymbolsPage() {
      this.RESET_SYMBOL_DATAS();
      await this.getSymbolDataFromApi(this.daily);
      this.SET_CURRENT_SYMBOL_DATA(this.symbolDatas.dailyDataSet);
      this.$router.push({
        name: "SymbolPage",
        params: {
          id: this.inputValue,
        },
      });
    },
    getHome() {
      this.RESET_SYMBOL_DATAS();
      this.RESET_INPUT_VALUE();
      this.$router.push({
        name: "Home",
      });
    },
  },
  computed: {
    value: {
      get() {
        return this.inputValue;
      },
      set(value) {
        this.SET_INPUT_VALUE(value);
      },
    },
    ...mapState(["inputValue", "symbolDatas"]),
    ...mapGetters({
      daily: "_getDailyQuery",
    }),
  },
};
</script>

<template>
  <div>
    <v-app-bar app dark color="secondary" height="90" class="header-container">
      <v-row class="justify-center align-center">
        <v-col sm="3">
          <span @click="getHome" style="cursor: pointer"
            ><i class="fas fa-hand-holding-usd fa-3x"></i
          ></span>
        </v-col>
        <v-col sm="6">
          <v-row class="justify-center">
            <v-col sm="10">
              <v-form @submit.prevent="getSymbolsPage">
                <v-text-field
                  v-model="value"
                  placeholder="Search symbol, ex: TSLA"
                  hide-details
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
        <v-col sm="3">
          <v-row>
            <v-col sm="6" class="d-flex justify-end align-center">
              <v-btn height="48">Panel</v-btn>
            </v-col>
            <v-col sm="6">
              <v-select
                v-model="selectedValue"
                :items="selectItems"
                label="Solo field"
                solo
                height="48"
                hide-details
              >
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>
<style scoped>
.header-container {
  padding-left: 40px;
  padding-right: 50px;
}
</style>
