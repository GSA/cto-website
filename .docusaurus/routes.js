import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'feb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '879'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'eb7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '203'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2dd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7cb'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '54f'),
    routes: [
      {
        path: '/docs/add-dap-snippet',
        component: ComponentCreator('/docs/add-dap-snippet', 'c7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/add-required-links',
        component: ComponentCreator('/docs/add-required-links', 'dd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/add-uswds-components',
        component: ComponentCreator('/docs/add-uswds-components', 'c20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/congratulations',
        component: ComponentCreator('/docs/congratulations', '86c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/enable-search',
        component: ComponentCreator('/docs/enable-search', '0de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/enhance-security',
        component: ComponentCreator('/docs/enhance-security', 'cbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ad7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
