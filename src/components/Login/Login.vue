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
			<v-btn
				x-large
				block
				:disabled="!valid"
				@click="onLogin"
				color="primary"
				:loading="loading"
				>Login</v-btn
			>
		</v-form>
		<v-snackbar top v-model="snackbarShow" :timeout="3000">
			{{ snackbarMessage }}
			<template v-slot:action="{ attrs }">
				<v-btn color="blue" text v-bind="attrs" @click="snackbarShow = false">
					Close
				</v-btn>
			</template>
		</v-snackbar>
	</v-container>
</template>

<script lang="ts">
import router from "@/router"
import user from "@/store/modules/user"
import Vue from "vue"

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
			(password: string) =>
				password.length > 0 || "Password must not be empty.",
		],
		loading: false,
		snackbarShow: false,
		snackbarMessage: "",
	}),
	methods: {
		validate() {
			// eslint-disable-next-line
			this.valid = (this.$refs.ref as any).validate()
			return this.valid
		},
		onLogin() {
			// only do login if form is valid
			if (this.validate()) {
				this.loading = true
				const body = new FormData()

				body.set("email", this.email)
				body.set("password", this.password)

				fetch("/api/login", {
					method: "POST",
					body,
				})
					.then((res) => res.json())
					// eslint-disable-next-line
					.then(({ data, error }: any) => {
						if (error) {
							this.snackbarMessage = error[0] || error
							this.snackbarShow = true
						}

						if (data) {
							// save login information
							return new Promise(() =>
								setTimeout(() => {
									router.push("/")
									user.commit("login", data)
								}, 1500)
							)
						}
					})
					.finally(() => {
						this.loading = false
					})
			}
		},
	},
})
</script>
