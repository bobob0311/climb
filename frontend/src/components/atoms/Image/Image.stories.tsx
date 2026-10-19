import type { Meta, StoryObj } from '@storybook/react-vite';
import CircleImage from './CircleImage';
import LogoImage from './LogoImage';

const sampleImage =
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 120%22%3E%3Crect width=%22120%22 height=%22120%22 fill=%22%232693ff%22/%3E%3Ccircle cx=%2260%22 cy=%2248%22 r=%2224%22 fill=%22%23fff35b%22/%3E%3Cpath d=%22M24 104c10-24 62-24 72 0%22 fill=%22%23ffffff%22/%3E%3C/svg%3E';

const meta = {
    title: 'Atoms/Image',
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

export const All: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '1.5rem', justifyItems: 'start' }}>
            <LogoImage />
            <CircleImage size='5rem' src={sampleImage} alt='Sample profile' />
        </div>
    ),
};
