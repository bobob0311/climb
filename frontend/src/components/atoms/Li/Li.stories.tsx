import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import TextLi from './TextLi';

const meta = {
    title: 'Atoms/Li',
    component: TextLi,
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
} satisfies Meta<typeof TextLi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Mountain route',
    },
    render: () => (
        <ul>
            <TextLi onClick={action('list item clicked')}>Mountain route</TextLi>
        </ul>
    ),
};
