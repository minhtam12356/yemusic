import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from '.';
import { HomeIcon } from '../Icon';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const Template: Story<InputProps> = args => <Input prefix={<HomeIcon />} suffix={<HomeIcon />} {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  disabled: false,
  fullWidth: false,
};
