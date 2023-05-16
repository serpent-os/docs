// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Serpent OS',
  tagline: 'Modular OS construction kit',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.serpentos.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'serpent-os', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/serpent-os/docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Serpent OS',
        logo: {
          alt: 'Serpent OS Logo',
          src: 'img/logo.webp',
          srcDark: 'img/logo_white.webp',
          width: 32,
          height: 32,
        },
        //style: 'dark',
        items: [
          {
            type: 'dropdown',
            label: 'About',
            position: 'left',
            items: [
              {
                to: 'about',
                label: 'Serpent OS',
              },
              {
                to: 'team',
                label: 'Team',
              }
            ]
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Forums',
                href: 'https://forums.serpentos.com/',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/#serpent-os-space:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Serpent_OS',
              },
            ],
          },
          {
            to: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Tools',
            position: 'left',
            items: [
              {
                to: 'boulder',
                label: 'Boulder'
              },
              {
                to: 'moss',
                label: 'Moss',
              }
            ]
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forums',
                href: 'https://forums.serpentos.com/',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/#serpent-os-space:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Serpent_OS',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/serpent-os',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Serpent OS Developers. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['d']
      },
    }),
};

module.exports = config;
