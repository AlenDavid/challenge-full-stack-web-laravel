<template>
	<v-container class="container" fluid>
		<v-row no-gutters align="center" class="row-center">
			<v-spacer />
			<v-col>
				<h1 class="center">Login</h1>
				<login-component />
			</v-col>
			<v-spacer />
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from "vue"
import LoginComponent from "@/components/Login/Login.vue"

export default Vue.extend({
	name: "Login",
	components: {
		LoginComponent,
	},
})
</script>

<style lang="scss" scoped>
.center {
	text-align: center;
}

.container {
	height: 100%;
}

.row-center {
	height: 80%;
}
</style>
