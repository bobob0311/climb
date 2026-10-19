import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import DigitInput from './DigitInput';
import TextInput from './TextInput';

const meta = {
    title: 'Atoms/Input',
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
        <div style={{ display: 'grid', gap: '1rem' }}>
            <TextInput
                id='storybook-text-input'
                ariaLabel='Text input'
                placeholder='Enter text'
                type='text'
                onInput={action('text input changed')}
            />
            <TextInput
                id='storybook-password-input'
                ariaLabel='Password input'
                placeholder='Enter password'
                type='password'
                onInput={action('password input changed')}
            />
            <DigitInput placeholder='12' />
        </div>
    ),
};
