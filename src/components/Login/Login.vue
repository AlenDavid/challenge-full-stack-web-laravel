<template>
  <v-container>
    <v-form ref="ref" lazy-validation v-model="valid">
      <v-text-field
        label="E-mail"
        type="email"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"
        :rules="passwordRules"
        required
      ></v-text-field>
      <v-btn x-large block :disabled="!valid" @click="validate" color="primary"
        >Login</v-btn
      >
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  data: () => ({
    ref: {},
    email: "",
    password: "",
    valid: true,
    emailRules: [
      (email: string) => !!email || "E-mail is required.",
      (email: string) =>
        /^([\w\d]+)@([\w\d]+.)+[\w\d.]+([\w\d])+$/.test(email) ||
        "E-mail is invalid.",
    ],
    passwordRules: [
      (password: string) => !!password || "Password is required.",
    ],
    loading: false,
  }),
  methods: {
    validate() {
      this.valid = (this.$refs.ref as any).validate();
    },
  },
});
</script>
