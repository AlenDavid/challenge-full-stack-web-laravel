<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/UI/Navbar.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navbar,
  },
});
</script>
