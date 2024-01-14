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
    path: '/docs',
    component: ComponentCreator('/docs', '01c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '19d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '01f'),
            routes: [
              {
                path: '/docs/category/recipes',
                component: ComponentCreator('/docs/category/recipes', 'b62'),
                exact: true,
                sidebar: "packageSidebar"
              },
              {
                path: '/docs/category/stone-format',
                component: ComponentCreator('/docs/category/stone-format', '61e'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/category/v1',
                component: ComponentCreator('/docs/category/v1', '6d4'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/developers/intro',
                component: ComponentCreator('/docs/developers/intro', '554'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/developers/stone/header',
                component: ComponentCreator('/docs/developers/stone/header', 'f66'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/developers/stone/overview',
                component: ComponentCreator('/docs/developers/stone/overview', '652'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/developers/stone/v1/header',
                component: ComponentCreator('/docs/developers/stone/v1/header', 'dc8'),
                exact: true,
                sidebar: "devSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'e84'),
                exact: true
              },
              {
                path: '/docs/packaging/boulder',
                component: ComponentCreator('/docs/packaging/boulder', 'f54'),
                exact: true,
                sidebar: "packageSidebar"
              },
              {
                path: '/docs/packaging/intro',
                component: ComponentCreator('/docs/packaging/intro', 'a33'),
                exact: true,
                sidebar: "packageSidebar"
              },
              {
                path: '/docs/packaging/recipes/build_deps',
                component: ComponentCreator('/docs/packaging/recipes/build_deps', '549'),
                exact: true,
                sidebar: "packageSidebar"
              },
              {
                path: '/docs/packaging/recipes/metadata',
                component: ComponentCreator('/docs/packaging/recipes/metadata', 'c27'),
                exact: true,
                sidebar: "packageSidebar"
              },
              {
                path: '/docs/packaging/recipes/overview',
                component: ComponentCreator('/docs/packaging/recipes/overview', 'be3'),
                exact: true,
                sidebar: "packageSidebar"
              },
              {
                path: '/docs/packaging/recipes/package_definition',
                component: ComponentCreator('/docs/packaging/recipes/package_definition', 'dff'),
                exact: true,
                sidebar: "packageSidebar"
              },
              {
                path: '/docs/packaging/recipes/upstreams',
                component: ComponentCreator('/docs/packaging/recipes/upstreams', 'e2a'),
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
          }
        ]
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
