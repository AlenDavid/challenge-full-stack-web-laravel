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
				required
			></v-text-field>
			<v-text-field
				label="CPF"
				type="text"
				v-model="CPF"
				:rules="cpfRules"
				required
			></v-text-field>
			<v-text-field
				label="RA"
				:rules="requiredRules"
				type="text"
				v-model="RA"
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

export default Vue.extend({
	name: "Student",
	props: {
		name: String,
		email: String,
		RA: String,
		CPF: String,
	},
	data: () => ({
		ref: {},
		valid: false,
		emailRules: [
			(email: string) => !!email || "E-mail is required.",
			(email: string) =>
				/^([\w\d]+)@([\w\d]+.)+[\w\d.]+([\w\d])+$/.test(email) ||
				"E-mail is invalid.",
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
				})
					.then((res) => res.json())
					// eslint-disable-next-line
					.then(({ data, error }: any) => {
						if (error) {
							this.snackbarMessage = error[0] || error
							this.snackbarShow = true
						}

						if (data) {
							return new Promise(() =>
								setTimeout(() => {
									router.back()
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
