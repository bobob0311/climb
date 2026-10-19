import type { Meta, StoryObj } from '@storybook/react-vite';
import TableCell from './TableCell';

const meta = {
    title: 'Atoms/Table',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cell: Story = {
    render: () => (
        <table>
            <tbody>
                <tr>
                    <TableCell>Course</TableCell>
                    <TableCell>2.4 km</TableCell>
                    <TableCell>Easy</TableCell>
                </tr>
            </tbody>
        </table>
    ),
};
