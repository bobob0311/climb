import type { Meta, StoryObj } from '@storybook/react-vite';
import IconLink from './IconLink';
import NavItemLink from './NavItemLink';

const meta = {
    title: 'Atoms/Link',
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
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <NavItemLink to='/'>Home</NavItemLink>
            <NavItemLink to='/mountains'>Mountains</NavItemLink>
            <IconLink to='/search' name='search-sm' />
        </nav>
    ),
};
