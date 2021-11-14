<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "SnackBar",
  data: () => ({
    snackbar: false,
    text: "Unauthorized login!",
  }),
  methods: {
    ...mapMutations(["SET_IS_ACTIVE_SNACKBAR"]),
  },
  computed: {
    ...mapState(["isActiveSnackBar"]),
    isActive: {
      get() {
        return this.isActiveSnackBar;
      },
      set(isActive) {
        this.SET_IS_ACTIVE_SNACKBAR(isActive);
      },
    },
  },
};
</script>

<template>
  <v-snackbar v-model="isActive">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="SET_IS_ACTIVE_SNACKBAR(false)"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
