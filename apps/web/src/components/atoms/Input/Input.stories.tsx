import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from '.';
import { HomeIcon } from '../Icon';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const Template: Story<InputProps> = args => (
  <>
    <Input {...args} />
    <Input {...args} suffix={<HomeIcon />} />
    <Input {...args} fullWidth suffix={<HomeIcon />} />
  </>
);

export const Demo = Template.bind({});
Demo.args = {};
