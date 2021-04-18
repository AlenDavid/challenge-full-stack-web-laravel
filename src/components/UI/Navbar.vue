<template>
	<v-app-bar app color="primary" dark>
		<nav>
			<v-btn :to="{ path: '/' }">Home</v-btn>
			<v-btn :to="{ path: '/about' }">About</v-btn>
			<v-btn v-if="isLogged" :to="{ path: '/app' }">Students</v-btn>
			<v-btn v-if="isLogged" @click="logout">Logout</v-btn>
			<v-btn v-if="!isLogged" :to="{ path: '/login' }">Login</v-btn>
		</nav>
	</v-app-bar>
</template>

<script lang="ts">
import user from "@/store/modules/user"
import Vue from "vue"

export default Vue.extend({
	name: "Navbar",
	computed: {
		isLogged() {
			return user.getters.isLogged
		},
	},
	methods: {
		logout() {
			fetch("/api/logout", { method: "POST" }).then(() => {
				if (this.$route.path !== "/") {
					this.$router.push("/")
					user.commit("logout")
				}
			})
		},
	},
})
</script>

<style scope lang="scss">
nav {
	display: flex;
	gap: 12px;
}
</style>
