import Navbar from "./Navbar.vue"

export default {
	title: "Components/Navbar",
	component: Navbar,
}

const Template = (args: any, { argTypes }: any) => ({
	props: Object.keys(argTypes),
	components: { Navbar },
	template: "<navbar v-bind='$props' />",
})

export const Default: any = Template.bind({})

export const Logged: any = Template.bind({})
Logged.args = {
	isLogged: true,
}
