import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Login from "../views/Login.vue"
import Application from "../views/Application.vue"
import Students from "../views/Students/List.vue"
import StudentCreate from "../views/Students/Create.vue"
import StudentView from "../views/Students/View.vue"

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
		component: Application,
		meta: {
			// only see if it's logged
			auth: true,
		},
		children: [
			{
				path: "/",
				redirect: "students/list",
				meta: {
					// only see if it's logged
					auth: true,
					// only see if user.type contains Manager
					type: 2,
				},
			},
			{
				path: "/",
				redirect: "settings",
				meta: {
					// only see if it's logged
					auth: true,
				},
			},
			{
				path: "students/list",
				name: "Students",
				component: Students,
				meta: {
					// only see if it's logged
					auth: true,
					// only see if user.type contains Manager
					type: 2,
				},
			},
			{
				path: "students/create",
				name: "StudentCreate",
				component: StudentCreate,
			},
			{
				path: "students/:snowflake",
				name: "StudentView",
				component: StudentView,
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
	const { auth = false, cannotIfLogged = false, type = 0 } = to.meta

	// maybe logged user cannot see next page
	// this rules apply to login page
	// but can be applied to other routes all well
	if (cannotIfLogged && userState.isLogged) return

	// user must be logged to go to next route
	// or should go to login

	if (auth && !userState.isLogged) next({ name: "Login" })

	// user can only go to next page
	// if user type contains page type needed
	// students cannot see /students page
	if (user.getters.user) {
		if ((user.getters.user.type & type) !== type) {
			return
		}
	}

	// user can go to next page
	next()
})

export default router
