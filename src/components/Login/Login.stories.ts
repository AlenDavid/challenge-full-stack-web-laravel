import Login from "./Login.vue"

export default {
	title: "Components/Login",
	component: Login,
}

const Template = (args: any, { argTypes }: any) => ({
	props: Object.keys(argTypes),
	components: { Login },
	template: "<login v-bind='$props' />",
})

export const Default: any = Template.bind({})

export const Filled: any = Template.bind({})
Filled.args = {
	email: "example@email.com",
	password: "password",
}

export const EmailInvalid: any = Template.bind({})
EmailInvalid.args = {
	email: "invalid as email",
}
