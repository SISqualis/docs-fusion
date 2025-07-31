import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FusionDocs',
  tagline: 'Documentação do Fusion',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sisqualis.github.io', // URL do GitHub Pages
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-fusion/'

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SISqualis', // Nome da organização no GitHub
  projectName: 'docs-fusion', // Nome do repositório

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
  //title: 'My Site',
  logo: {
    alt: 'My Site Logo',
    src: 'img/logo-colorido.png', // [cite: 11]
    srcDark: 'img/logo-dark.png', // [cite: 11]
  },
  items: [
    {
      type: 'docSidebar', // [cite: 12]
      sidebarId: 'tutorialSidebar', // [cite: 12] // Mantenha este ID se a sua sidebar ainda se chama 'tutorialSidebar'.
      position: 'left', // [cite: 12]
      label: 'Documentação', // [cite: 12] // "Tutorial" alterado para "Documentação"
      className: 'navbar__link--documentation', // Classe CSS exclusiva para "Documentação"
    },
    {
      href: 'https://sisqualis.com.br/blog/',
      label: 'Blog', // [cite: 12]
      position: 'left', // [cite: 12]
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'navbar__link--blog', // Classe CSS opcional para o Blog, se desejar
    },
    {
      href: 'https://sisqualis.com.br/',
      label: 'Acessar Site',
      position: 'left',
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'navbar__link--acessar-site', // Classe CSS opcional para "Acessar Site", se desejar
    },
  ],
},
    footer: {
      style: 'dark',
      links: [
        {
          title: 'FusionDoc',
          items: [
            {
              label: 'Home',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'A SISqualis',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/Sisqualis',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/sisqualis/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/c/SisqualisBr_RS',
            },

            {
              label: 'Linkedin',
              href: 'https://br.linkedin.com/company/sisqualis',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Blog',
              href: 'https://sisqualis.com.br/blog/',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
            {
              label: 'Site',
              href: 'https://sisqualis.com.br/',
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Sisqualis – Hal 9000 Sistemas de informação em saúde – Todos os direitos reservados. CNPJ: 15.300.158/0001-54.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
