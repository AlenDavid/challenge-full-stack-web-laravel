<template>
	<v-container class="container">
		<h1>Register student</h1>
		<student />
	</v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Student from "@/components/Student/Student.vue"

export default Vue.extend({
	name: "StudentCreate",
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
