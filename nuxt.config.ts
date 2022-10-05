// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "my blog",
      meta: [{ charaset: "utf-8" }, { name: "viewport", content: "width=device-width ,initial-scale=1.0" }],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" },
      ],
    },
  },
});
