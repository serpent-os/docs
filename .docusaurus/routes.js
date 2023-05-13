import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd72'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '417'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a39'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '182'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9b4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'de5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'bd0'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2f6'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c84'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'b7a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'd07'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '079'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '1dc'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '665'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '371'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ce6'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '82d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '3fc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'f36'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fcd'),
    routes: [
      {
        path: '/docs/developers/intro',
        component: ComponentCreator('/docs/developers/intro', '554'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'e84'),
        exact: true
      },
      {
        path: '/docs/packaging/intro',
        component: ComponentCreator('/docs/packaging/intro', 'a33'),
        exact: true,
        sidebar: "packageSidebar"
      },
      {
        path: '/docs/users/intro',
        component: ComponentCreator('/docs/users/intro', '420'),
        exact: true,
        sidebar: "userSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '5ac'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
