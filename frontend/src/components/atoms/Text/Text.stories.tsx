import type { Meta, StoryObj } from '@storybook/react-vite';
import CautionText from './CautionText';
import CommonText from './CommonText';
import FilterLabelTextBox from './FilterLabelTextBox';
import FormLabelText from './FormLabelText';
import SearchBarText from './SearchBarText';
import SelectorText from './SelectorText';
import SelectorTitleText from './SelectorTitle';
import TwoLinesEllipsis from './TwoLinesEllipsis';
import WarningText from './WarningText';

const meta = {
    title: 'Atoms/Text',
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
        <div style={{ display: 'grid', gap: '1rem', maxWidth: '24rem' }}>
            <CommonText TextTag='p' fontSize='body' fontWeight='bold'>
                Common body text
            </CommonText>
            <SearchBarText>Search label</SearchBarText>
            <SelectorTitleText>Selector title</SelectorTitleText>
            <SelectorText>Selector description</SelectorText>
            <FormLabelText text='Form label' />
            <FilterLabelTextBox>Filter label</FilterLabelTextBox>
            <CautionText>Caution message</CautionText>
            <WarningText>Warning message</WarningText>
            <TwoLinesEllipsis>
                This long description is rendered through the two-line
                ellipsis component so its clipping behavior can be checked in
                Storybook.
            </TwoLinesEllipsis>
        </div>
    ),
};
