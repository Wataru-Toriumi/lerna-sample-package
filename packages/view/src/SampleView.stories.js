import React from 'react';

import {SampleView} from './index';

console.log(SampleView);

export default {
  title: 'Example1/view',
  component: SampleView,
  argTypes: {
  },
};

const Template = (args) => {
  return (<SampleView {...args} />);
};

export const Default = Template.bind({});
Default.args = {};
