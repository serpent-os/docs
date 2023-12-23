import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '901'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1b8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd66'),
            routes: [
              {
                path: '/docs/category/recipes',
                component: ComponentCreator('/docs/category/recipes', 'b62'),
                exact: true,
                sidebar: "packageSidebar"
              },
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
