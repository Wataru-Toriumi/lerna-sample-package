import React from 'react';

import {ButtonAppBar} from './index';


export default {
  title: 'Example1/header',
  component: ButtonAppBar,
  argTypes: {
  },
};

const Template = (args) => {
  return (<ButtonAppBar {...args} />);
};

export const Default = Template.bind({});
Default.args = {};
