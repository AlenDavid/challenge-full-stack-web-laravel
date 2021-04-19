<template>
	<div>
		<v-form ref="ref" lazy-validation v-model="valid">
			<v-text-field
				label="Name"
				type="text"
				v-model="name"
				:rules="requiredRules"
				required
			></v-text-field>
			<v-text-field
				label="E-mail"
				type="email"
				v-model="email"
				:rules="emailRules"
				@input="errorMessages.email = []"
				:error-messages="errorMessages.email"
				required
			></v-text-field>
			<v-text-field
				label="CPF"
				type="text"
				v-model="CPF"
				v-mask="'###.###.###-##'"
				:rules="cpfRules"
				@input="errorMessages.CPF = []"
				:error-messages="errorMessages.CPF"
				required
			></v-text-field>
			<v-text-field
				label="RA"
				:rules="requiredRules"
				type="text"
				v-model="RA"
				@input="errorMessages.RA = []"
				:error-messages="errorMessages.RA"
				required
			></v-text-field>
			<v-btn
				x-large
				block
				:disabled="!valid"
				@click="onLogin"
				color="primary"
				:loading="loading"
				>Register</v-btn
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
	</div>
</template>

<script lang="ts">
import router from "@/router"
import Vue from "vue"
import { EMAIL_PATTERN } from "@/services/constants"

export default Vue.extend({
	name: "Student",
	data: () => ({
		ref: {},
		valid: false,
		name: "",
		email: "",
		CPF: "",
		RA: "",
		errorMessages: {
			email: [],
			RA: [],
			CPF: [],
		},
		emailRules: [
			(email: string) => !!email || "E-mail is required.",
			(email: string) => EMAIL_PATTERN.test(email) || "E-mail is invalid.",
		],
		requiredRules: [(field: string) => !!field || "This field is required."],
		cpfRules: [
			(cpf: string) => !!cpf || "CPF is required.",
			(cpf: string) =>
				/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf) || "CPF is invalid.",
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
				body.set("name", this.name)
				body.set("RA", this.RA)
				body.set("CPF", this.CPF)

				fetch("/api/students", {
					method: "POST",
					body,
					keepalive: true,
				})
					.then(async (response) => {
						if (response.status >= 200 && response.status < 300)
							return await response.json()

						throw await response.json()
					})
					// eslint-disable-next-line
					.then(({ data }: any) => {
						if (data) {
							return new Promise(() =>
								setTimeout(() => {
									router.push(`/app/students/${data.snowflake}`)
								}, 1500)
							)
						}
					})
					.catch((error) => {
						if (error) {
							this.errorMessages = { ...this.errorMessages, ...error }
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
