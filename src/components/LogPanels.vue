<script>
import { mapState } from "vuex";
export default {
  name: "LogPanels",
  computed: {
    ...mapState(["log"]),
  },
};
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(logData, i) in log" :key="i">
      <v-expansion-panel-header
        :class="{ 'color-red': logData.isUnauthorized }"
      >
        <h3>Log {{ i + 1 }}</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p class="m-0"><strong>Time: </strong> {{ new Date(logData.time) }}</p>
        <p class="m-0"><strong>From: </strong> {{ logData.from }}</p>
        <p class="m-0"><strong>To: </strong> {{ logData.to }}</p>
        <p class="m-0">
          <strong>Is Authorized: </strong> {{ !logData.isUnauthorized }}
        </p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.color-red {
  color: #ff0000;
}

.m-0 {
  margin: 0;
}
</style>
