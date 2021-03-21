import React from 'react';

import {TemporaryDrawer} from './index';


export default {
  title: 'Example1/drawer',
  component: TemporaryDrawer,
  argTypes: {
  },
};

const Template = (args) => {
  return (<TemporaryDrawer {...args} />);
};

export const Default = Template.bind({});
Default.args = {};
