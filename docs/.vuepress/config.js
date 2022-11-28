module.exports = {
    title: "Yu Si, Kenny (司宇)",
    description: "The description of the site.",
    head: [
        ["link", { rel: "icon", href: `/logo.png` }]
    ],
    base: "/",
    dest: "./dist",

    themeConfig: {
        search: true,
        nav: [
            { text: "主页", link: "/" },
            { text: "个人事迹", link: "/about/" },
            { text: "获奖证书", link: "/projects/" },
            { text: "编程导航", link: "/guide/" },
            { text: "GitHub", link: "https://siyukenny.github.io/home/" }
        ],
        sidebar: {
            '/guide/': genSidebarConfig('Guide'),
            '/projects/': genSidebarConfig('Projects')
        },
        lastUpdated: 'Last Updated'
    },

    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        extendMarkdown: md => {
            md.use(require("markdown-it-katex"));
        }
    }
};

function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'README'
        ]
    }]
}