import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Login from "../views/Login.vue"
import Application from "../views/Application.vue"
import Students from "../views/Students/List.vue"

import user from "@/store/modules/user"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: {
			// cannot see if it's logged
			cannotIfLogged: true,
		},
	},
	{
		path: "/app",
		name: "App",
		component: Application,
		children: [
			{
				path: "/",
				redirect: "students",
				meta: {
					// only see if it's logged
					auth: true,
				},
			},
			{
				path: "students",
				name: "Students",
				component: Students,
			},
			{
				path: "profile",
				name: "Profile",
				component: Students,
			},
			{
				path: "settings",
				name: "Settings",
				component: Students,
			},
			{
				path: "managers",
				name: "Managers",
				component: Students,
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

router.beforeEach(async (to, from, next) => {
	// this is our user state
	const userState = user.state

	if (!userState.isLogged) {
		try {
			const res = await fetch("/api/current", {
				method: "POST",
			})
			// es-lint-ignore-next-line
			const { data } = await res.json()

			if (data) {
				user.commit("login", data)
			}
		} catch (error) {
			console.error(error)
		}
	}
	const { auth = false, cannotIfLogged = false } = to.meta

	// maybe logged user cannot see next page
	// this rules apply to login page
	// but can be applied to other routes all well
	if (cannotIfLogged && userState.isLogged) return

	// user must be logged to go to next route
	// or should go to login

	if (auth && !userState.isLogged) next({ name: "Login" })

	// user can go to next page
	next()
})

export default router
