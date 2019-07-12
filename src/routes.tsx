import React from 'react';
import { mount, route } from 'navi';
import { CountersWithMapProps } from './CountersWithMapProps';
import { CountersWithHooks } from './CountersWithHooks';
import { CountersWithUnstatedNext } from './CountersWithUnstatedNext';

export const routes = mount({
  '/': route({
    title: 'With mapStateToProps',
    view: <CountersWithMapProps />,
  }),
  '/hooks': route({
    title: 'With Hooks',
    view: <CountersWithHooks />,
  }),
  '/unstated': route({
    title: 'With unstated-next',
    view: <CountersWithUnstatedNext />,
  }),
});
