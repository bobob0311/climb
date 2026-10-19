import type { Meta, StoryObj } from '@storybook/react-vite';
import {
    DisplayHeading,
    HeadlineHeading,
    LabelHeading,
} from './Heading';

const meta = {
    title: 'Atoms/Heading',
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '2rem', background: '#333333' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '1rem' }}>
            <DisplayHeading HeadingTag='h1'>Display Heading</DisplayHeading>
            <HeadlineHeading HeadingTag='h2'>Headline Heading</HeadlineHeading>
            <LabelHeading HeadingTag='h3'>Label Heading</LabelHeading>
        </div>
    ),
};
