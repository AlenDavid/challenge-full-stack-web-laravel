<template>
	<v-app-bar app color="primary">
		<nav>
			<v-btn color="white" text @click="go('/')">Home</v-btn>
			<v-btn color="white" text @click="go('/about')">About</v-btn>
			<v-btn color="white" text v-if="isLogged && type & 1" @click="go('/app')"
				>App</v-btn
			>
			<v-btn color="white" text class="right" v-if="isLogged" @click="logout"
				>Logout</v-btn
			>
			<v-btn
				color="white"
				text
				class="right"
				v-if="!isLogged && route !== 'Login'"
				@click="go('/login')"
				>Login</v-btn
			>
		</nav>
	</v-app-bar>
</template>

<script lang="ts">
import user from "@/store/modules/user"
import Vue from "vue"

export default Vue.extend({
	name: "Navbar",
	computed: {
		route() {
			return this.$route.name ?? ""
		},
		isLogged() {
			return user.getters.isLogged
		},
		type() {
			return user.getters.user.type ?? 0
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
				}

				user.commit("logout")
			})
		},
	},
})
</script>

<style scope lang="scss">
nav {
	display: flex;
	width: 100%;
	gap: 12px;

	.right {
		margin-left: auto;
	}
}
</style>
