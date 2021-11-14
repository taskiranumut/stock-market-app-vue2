<script>
import LogPanels from "@/components/LogPanels.vue";

export default {
  name: "PanelPage",
  components: {
    LogPanels,
  },
};
</script>

<template>
  <v-container>
    <v-row class="justify-center align-center">
      <v-col sm="8">
        <h1 class="my-5">Recorded Logs</h1>
        <LogPanels />
      </v-col>
    </v-row>
  </v-container>
</template>
