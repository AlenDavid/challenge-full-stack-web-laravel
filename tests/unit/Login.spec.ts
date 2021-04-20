import { shallowMount } from "@vue/test-utils"

import Login from "@/components/Login/Login.vue"

describe("Login.vue", () => {
	it("should match snapshot component", () => {
		const wrapper = shallowMount(Login)

		expect(wrapper).toMatchSnapshot()
	})

	it("should see login button", () => {
		const wrapper = shallowMount(Login)

		// select the login button
		const button = wrapper.find("[test-id='login-button']")

		expect(button.html()).toMatch("Login")
	})
})
