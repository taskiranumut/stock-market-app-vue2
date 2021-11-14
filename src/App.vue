<script>
import AppHeader from "@/components/AppHeader.vue";
import SnackBar from "@/components/SnackBar.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    SnackBar,
  },
  created() {
    this.getLogFromLocalStorage();
  },
  methods: {
    ...mapActions(["postLogToLocalStorage", "getLogFromLocalStorage"]),
    fillLog(to, from) {
      return {
        from,
        to,
        isUnauthorized: this.isActiveSnackBar,
        time: new Date().getTime(),
      };
    },
  },
  computed: {
    ...mapState(["isActiveSnackBar"]),
  },
  watch: {
    $route(to, from) {
      const log = this.fillLog(to.path, from.path);
      this.postLogToLocalStorage(log);
    },
    isActiveSnackBar() {
      console.log(this.$route.fullPath);
      if (this.isActiveSnackBar === true) {
        const to = "/panel";
        const from = this.$route.fullPath;
        const log = this.fillLog(to, from);
        this.postLogToLocalStorage(log);
      }
    },
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
