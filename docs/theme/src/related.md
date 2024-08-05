---
title: Related Plugins
icon: puzzle-piece
---

<!-- markdownlint-disable -->

<div class="plugins-wrapper">
  <a v-for="{ text, icon, link } in features" class="plugin-item" target="_blank" :href="link">
    <HopeIcon :icon="icon" />
    <div>{{text}}</div>
  </a>
</div>

<script setup lang="ts">
const getLink = (name: string): string =>
  `https://${
    IS_NETLIFY
      ? `${name === "shared" ? name : `plugin-${name}`}.vuejs.press/`
      : `vuepress-theme-hope.${
          IS_GITEE ? "gitee" : "github"
        }.io/v2/${name.replace(/\d+$/, "")}/`
  }`;

const features = [
  {
    text: "Components Plugin",
    icon: "puzzle-piece",
    link: getLink("components"),
  },
  {
    text: "LightGallery Plugin",
    icon: "image",
    link: getLink("lightgallery"),
  },
  {
    text: "Markdown Enhance Plugin",
    icon: "fab fa-markdown",
    link: getLink("md-enhance"),
  },
  {
    text: "Client Search Plugin",
    icon: "search",
    link: getLink("search-pro"),
  },
  {
    text: "VuePress shared",
    icon: "toolbox",
    link: getLink("shared"),
  },
];
</script>
