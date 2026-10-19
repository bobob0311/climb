import type { Meta, StoryObj } from '@storybook/react-vite';
import Icon from './Icons';

const iconNames = [
    'clear-day',
    'cloudy',
    'rain',
    'snow',
    'search-sm',
    'settings-04',
    'bell-01',
    'heart-rounded',
    'download-02',
    'x',
];

const meta = {
    title: 'Atoms/Icon',
    component: Icon,
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
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
    args: {
        name: 'clear-day',
        width: 1.5,
        height: 1.5,
        color: 'grey-100',
    },
    render: () => (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, minmax(3rem, 1fr))',
                gap: '1rem',
            }}
        >
            {iconNames.map((name) => (
                <Icon
                    key={name}
                    name={name}
                    width={1.5}
                    height={1.5}
                    color='grey-100'
                />
            ))}
        </div>
    ),
};

export const Primary: Story = {
    args: {
        name: 'search-sm',
        width: 1.8,
        height: 1.8,
        color: 'grey-100',
    },
};
