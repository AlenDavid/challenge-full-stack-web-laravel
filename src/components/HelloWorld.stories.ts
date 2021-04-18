import HelloWorld from "./HelloWorld.vue"

export default {
	title: "Components/HelloWorld",
	component: HelloWorld,
}

const Template = (args: any, { argTypes }: any) => ({
	props: Object.keys(argTypes),
	components: { HelloWorld },
	template: "<hello-world v-bind='$props' />",
})

export const Default: any = Template.bind({})
Default.args = {
	title: "Título",
}
