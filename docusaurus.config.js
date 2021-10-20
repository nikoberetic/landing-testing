// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Filecoin mining. Documented.',
    tagline: 'From setup to insights - FilMine docs got you covered.',
    url: 'https://your-filmine-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Alt Labs', // Usually your GitHub org/user name.
    projectName: 'Filmine', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
            metadatas: [{name: 'twitter:card', author: 'Alt Labs'}],
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
            },
            navbar: {
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        to: '/',
                        label: "Home",
                        position: 'left',
                        activeBaseRegex: '^/$'
                    },
                    {
                        type: 'doc',
                        docId: 'doc1',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/filmineio/',
                        label: 'GitHub',
                        position: 'right',
                        className: 'navbar__item navbar__link remove-icon'
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        items: [
                            {
                                html: `
                                    <div>
                                        <a href="/">
                                            <img src="/img/logo.svg" alt="Home" />
                                        </a>
                                    </div>
                                    <p class="copyright">© 2021 Filmine.</p>
                                  `,
                            },
                        ],
                    },
                    {
                        title: 'Products',
                        items: [
                            {
                                label: 'Mining managment',
                                href: '/',
                            },
                            {
                                label: 'Miners monitoring',
                                href: '/blog',
                            },
                            {
                                label: 'Mining optimization',
                                href: '/blog/welcome',
                            },
                        ],
                    },
                    {
                        title: 'General',
                        items: [
                            {
                                label: 'About us',
                                href: '/',
                            },
                            {
                                label: 'Blog',
                                href: '/blog',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                html: `
                                    <div class="footer-social">
                                        <a href="https://twitter.com/wukoje" target="_blank">
                                            <img src="/img/icon-twitter.svg" alt="Twitter" />
                                            <img src="/img/icon-twitter-white.svg" alt="Twitter" />
                                        </a>
                                        <a href="https://github.com/filmineio/" target="_blank">
                                            <img src="/img/icon-github.svg" alt="Github" />
                                            <img src="/img/icon-github-white.svg" alt="Github" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/vvkio/" target="_blank">
                                            <img src="/img/icon-linkedin.svg" alt="Linkedin" />
                                            <img src="/img/icon-linkedin-white.svg" alt="Linkedin" />
                                        </a>
                                    </div>
                                  `,
                            },
                        ],
                    },
                ],
                // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['apacheconf', 'systemd'],
            },
        }),
};

module.exports = config;
