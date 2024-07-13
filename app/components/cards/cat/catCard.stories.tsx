import type { Meta, StoryObj } from '@storybook/react';

import CatCard from './CatCard';
import { mockCatCardProps } from './catCard.mocks';

const meta = {
  title: 'cards/CatCard',
  component: CatCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { ...mockCatCardProps.base },
};
