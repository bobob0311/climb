import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import CheckBox from './CheckBox';

const meta = {
    title: 'Atoms/Form',
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

function StatefulCheckBox() {
    const [checked, setChecked] = useState(false);

    return (
        <CheckBox
            id='storybook-checkbox'
            text='Agree to notifications'
            subTitle='Click to toggle the checked state'
            checked={checked}
            onChange={() => {
                setChecked((value) => !value);
                action('checkbox changed')();
            }}
        />
    );
}

export const Default: Story = {
    render: () => <StatefulCheckBox />,
};

export const Checked: Story = {
    render: () => (
        <CheckBox
            id='storybook-checkbox-checked'
            text='Checked option'
            subTitle='Default checked view'
            checked
            onChange={action('checkbox changed')}
        />
    ),
};
