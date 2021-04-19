<template>
	<v-container class="container">
		<h1>Student</h1>
		<v-form :readonly="readonly" ref="ref" lazy-validation v-model="valid">
			<v-text-field
				label="Name"
				type="text"
				v-model="student.name"
				:rules="requiredRules"
				required
			></v-text-field>
			<v-text-field
				label="E-mail"
				type="email"
				v-model="student.email"
				:rules="emailRules"
				required
			></v-text-field>
			<v-text-field
				label="CPF"
				type="text"
				v-model="student.CPF"
				readonly
			></v-text-field>
			<v-text-field
				label="RA"
				type="text"
				v-model="student.RA"
				readonly
			></v-text-field>
		</v-form>
		<v-row class="row" dense>
			<v-btn v-if="readonly" color="primary" @click="readonly = !readonly">
				Edit
			</v-btn>
			<v-btn v-if="!readonly" outlined @click="cancel"> Cancel </v-btn>
			<v-btn v-if="!readonly" color="primary" @click="save"> Save </v-btn>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from "vue"
import { EMAIL_PATTERN } from "@/services/constants"

export default Vue.extend({
	name: "StudentView",
	props: {
		snowflake: String,
	},
	data: () => ({
		valid: false,
		readonly: true,
		requiredRules: [(field: string) => !!field || "This field is required."],
		emailRules: [
			(email: string) => !!email || "E-mail is required.",
			(email: string) => EMAIL_PATTERN.test(email) || "E-mail is invalid.",
		],
	}),
	asyncComputed: {
		student: {
			async get() {
				let user = {}
				try {
					const url = `/api/students/${this.$route.params.snowflake}`
					const res = await fetch(url)
					const { data } = await res.json()
					user = data
				} catch (error) {
					console.log("error")
				}

				return user
			},
			default: {},
		},
	},
	methods: {
		refresh() {
			this.$asyncComputed.student.update()
		},
		cancel() {
			this.readonly = !this.readonly
		},
		save() {
			this.readonly = !this.readonly

			if (this.$route.params.snowflake) {
				const url = `/api/students/${this.$route.params.snowflake}`
				const body = new FormData()
				body.set("name", (this as any).student.name)
				body.set("email", (this as any).student.email)

				fetch(url, {
					method: "POST",
					body,
				})
			}
		},
	},
})
</script>

<style lang="scss" scoped>
.container {
	max-width: 40%;
}

.row {
	gap: 12px;
}
</style>
