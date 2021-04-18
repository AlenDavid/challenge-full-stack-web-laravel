<template>
	<v-app-bar app color="primary" dark>
		<nav>
			<v-btn @click="go('/')">Home</v-btn>
			<v-btn @click="go('/about')">About</v-btn>
			<v-btn v-if="isLogged" @click="go('/app')">Students</v-btn>
			<v-btn v-if="isLogged" @click="logout">Logout</v-btn>
			<v-btn v-if="!isLogged" @click="go('/login')">Login</v-btn>
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
		go(path: string) {
			// $router does not exist in storybook
			if (this.$router) {
				this.$router.push(path)
			}
		},
		logout() {
			fetch("/api/logout", { method: "POST" }).then(() => {
				if (this.$route.path !== "/") {
					// $router does not exist in storybook
					if (this.$router) {
						this.$router.push("/")
					}
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
