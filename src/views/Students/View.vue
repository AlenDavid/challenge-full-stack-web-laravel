<template>
	<v-container class="container">
		<h1>{{ snowflake }}</h1>
		<student v-bind="student" />
	</v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Student from "@/components/Student/Student.vue"

export default Vue.extend({
	name: "StudentView",
	props: {
		snowflake: String,
	},
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
	components: {
		Student,
	},
})
</script>

<style lang="scss" scoped>
.container {
	max-width: 40%;
}
</style>
