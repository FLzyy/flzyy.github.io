// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FLzyy",
  tagline: "A Generalist Developer",
  url: "https://flzyy.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/profile.gif",

  organizationName: "FLzyy",
  projectName: "flzyy.github.io",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "FLzyy",
        logo: {
          src: "img/profile.gif",
          href: "/",
          className: "profile",
        },
        hideOnScroll: true,
        items: [
          { to: "/projects", label: "Projects", position: "right" },
          {
            label: "Github",
            href: "https://github.com/FLzyy",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
