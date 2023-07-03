/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import SecoundHeroImage, { Props as SecoundHeroImageProps } from './index';

export default {
	title: 'Design System/Busniess Components/myComponent',
	component: SecoundHeroImage,
	argTypes: {

	},
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof SecoundHeroImage> = (args) => <SecoundHeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {

} as SecoundHeroImageProps;
