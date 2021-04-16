import Login from "./Login.vue";

export default {
  title: "Components/Login",
  component: Login,
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { Login },
  template: "<login v-bind='$props' />",
});

export const Default: any = Template.bind({});
Default.args = {
  email: "example@email.com",
  password: "password",
};
