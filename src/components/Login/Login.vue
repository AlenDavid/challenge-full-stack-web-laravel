<template>
  <v-container>
    <v-form @submit.prevent="onsubmit">
      <v-text-field
        label="E-mail"
        type="email"
        v-model="email"
        :rules="emailRules"
        required
      />
      <v-text-field label="Password" type="password" v-model="password" />
      <v-row>
        <v-col>
          <v-btn>Cancel</v-btn>
        </v-col>
        <v-col>
          <v-btn type="submit" :loading="loading" color="primary">Login</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  props: {
    email: String,
    password: String,
  },
  data: () => ({
    emailRules: [
      (email: string) => !!email || "E-mail is required.",
      (email: string) =>
        /^([\w\d]+)@([\w\d]+.)+[\w\d.]+([\w\d])+$/.test(email) ||
        "E-mail is invalid.",
    ],
    loading: false,
  }),
  methods: {
    onsubmit() {
      this.loading = true;
    },
  },
});
</script>
