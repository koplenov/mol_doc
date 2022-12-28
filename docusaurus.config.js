/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '$mol doc',
  tagline: 'Dinosaurs are cool',
  url: 'https://koplenov.github.io/mol_doc/',
  baseUrl: '/mol_doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'mol-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Page',
      logo: {
        alt: '$mol Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'docs/basics-of-language-V',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'tutorials/intro',
          position: 'left',
          label: 'Tutorial',
        },
        /* maybe for future ¯\_(ツ)_/¯
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        */
        {
          href: 'https://github.com/koplenov/vbyexample',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Official framework site',
              to: 'https://mol.hyoo.ru/',
            },
            {
              label: 'Telegram news',
              href: 'https://t.me/mol_news',
            },
            {
              label: 'Telegram support chat',
              href: 'https://t.me/mam_mol',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
	hideableSidebar: true,
  },
    i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/koplenov/mol_doc/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/koplenov/mol_doc/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

};
