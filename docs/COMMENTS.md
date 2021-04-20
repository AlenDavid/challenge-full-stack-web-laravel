# Comments

- [Comments](#comments)
  - [Architect decisions](#architect-decisions)
  - [3rd Party libs](#3rd-party-libs)
  - [With more time, what would I do?](#with-more-time-what-would-i-do)
  - [Which mandatory requirements was not delivered?](#which-mandatory-requirements-was-not-delivered)

## Architect decisions

- I tried to use MVVM (model-view-view-model) architecture mainly because I already use it on my react projects. Vue gets this concept and applies within it's files, so it's easy to write code that operates some logic and is prompted to the user.

```vue
<template />
<script />
<style />
```

- I also made a setup for Storybook. I already used storybook in some projects and I used here too. I couldn't find a good way to implement it using Vue (I mean, the time was short), but I wanted to show you guys at least some usage concept.

- I used ts (typescript) because this language make saffer to type, maintain and debug code. Also, allows us to use typing to differ possible fields in objects. You can see more at [this](/src/types/Auth.d.ts) implementation.

## 3rd Party libs

- [v-mask](https://www.npmjs.com/package/v-mask)

The v-mask lib allows us to use mask in input fields (I used in CPF input field). I didn't like the v-mask lib because it doesn't have types (I had to declare a file to handle this). Also, it throws a lot of errors using v-model.

- [vue-router](https://www.npmjs.com/package/vue-router)

The vue-router is amazing to handle navigation inside the project. As Vue is a one-page app, the router allowed me to control router path with ease.

- [vuetify](https://vuetifyjs.com/en)

Vuetify was required, but I want to talk about it here. I loved the usability and the reuse of some properties (like css classes). I was getting better and better at using vuetify every day on this project. I made some css classes to use when I didn't have the knowledge of using vuetify classes.

- [storybook](http://storybook.js.org)

Storybook is amazing to work with UI and UX designers, primarly because the designers and dev teams could join to create and test useful components without putting them in the project. Using babel, the project build will never growth in size, so it's really helpful.

- [vue-async-computed](https://www.npmjs.com/package/vue-async-computed)

The vue async computed allow us to load values from the backend with an async method. We could already use this by using some tricks that I found, but using async computed was really helpful. I really needed at students page because I paginated the backend. So, everytime we handle next page, we trigger the async computed.

## With more time, what would I do?

Ordered by priorities, I would:

1. Create e2e tests of this project.
2. Refactor code to better use vuetify.
3. Create a page to CRUD managers.
4. Create a page to CRUD admins.
5. Update students/managers/admins view to allow updating flags (for feature flag-usage).
6. Defines feature-flag modules/pages.

## Which mandatory requirements was not delivered?

I believe to have delivered everything that was asked.
