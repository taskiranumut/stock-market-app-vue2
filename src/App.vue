<script>
import AppHeader from "@/components/AppHeader.vue";
import SnackBar from "@/components/SnackBar.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    SnackBar,
  },
};
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <router-view />
    </v-main>
    <SnackBar />
  </v-app>
</template>
