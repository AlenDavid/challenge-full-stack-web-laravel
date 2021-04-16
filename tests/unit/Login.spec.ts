import { shallowMount } from "@vue/test-utils";

import Login from "@/components/Login/Login.vue";

describe("Login.vue", () => {
  it("should match snapshot component", () => {
    const wrapper = shallowMount(Login);

    expect(wrapper).toMatchSnapshot();
  });

  it("should see email and password", () => {
    const wrapper = shallowMount(Login, {
      propsData: {
        email: "example@example.com",
        password: "password",
      },
    });

    // select the text field
    const emailInput = wrapper.find("[type='email']");
    const passInput = wrapper.find("[type='password']");

    expect(emailInput.attributes().value).toMatch("example@example.com");
    expect(passInput.attributes().value).toMatch("password");
  });

  it("should see login button", () => {
    const wrapper = shallowMount(Login, {
      propsData: {
        email: "example@example.com",
        password: "password",
      },
    });

    // select the login button
    const button = wrapper.find("[type='submit']");

    expect(button.html()).toMatch("Login");
  });
});
