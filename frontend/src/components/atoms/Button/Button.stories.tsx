import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import CloseButton from './CloseButton';
import DayButton from './DayButton';
import DownloadButton from './DownLoadButton';
import FilterLabelButton from './FilterLabelButton';
import FormButton from './FormButton';
import IconButton from './IconButton';
import ModalButton from './ModalButton';
import ToggleButton from './ToggleButton';

const meta = {
    title: 'Atoms/Button',
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

function StatefulToggleButton() {
    const [isOn, setIsOn] = useState(false);

    return (
        <ToggleButton
            isOn={isOn}
            onClick={() => {
                setIsOn((value) => !value);
                action('toggle clicked')();
            }}
        />
    );
}

function StatefulFilterLabelButton() {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <FilterLabelButton
            isSelected={isSelected}
            onClick={() => {
                setIsSelected((value) => !value);
                action('filter clicked')();
            }}
        >
            Weather
        </FilterLabelButton>
    );
}

export const All: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'flex-start',
            }}
        >
            <DayButton>Mon</DayButton>
            <StatefulFilterLabelButton />
            <FormButton
                text='Submit'
                type='button'
                onClick={action('form button clicked')}
            />
            <IconButton
                iconName='search-sm'
                ariaLabel='Search'
                onClick={action('icon button clicked')}
            />
            <ModalButton onClick={action('modal button clicked')}>
                Confirm
            </ModalButton>
            <StatefulToggleButton />
            <CloseButton onClose={action('close clicked')} />
            <div
                style={{
                    position: 'relative',
                    width: '12rem',
                    height: '8rem',
                    background: '#626262',
                    borderRadius: '0.75rem',
                }}
            >
                <DownloadButton onClick={action('download clicked')} />
            </div>
        </div>
    ),
};

export const Toggle: Story = {
    render: () => <StatefulToggleButton />,
};

export const FilterLabel: Story = {
    render: () => <StatefulFilterLabelButton />,
};
