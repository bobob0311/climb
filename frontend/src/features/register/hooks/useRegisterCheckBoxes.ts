import { useState } from 'react';
import { checkBoxes } from '../constants/registerCheckBoxesConfig';

interface Props {
    onCheckStatusChange: (isValid: boolean) => void;
}

const createInitialCheckedItems = () =>
    Object.fromEntries(checkBoxes.map((box) => [box.id, false])) as Record<
        string,
        boolean
    >;

export default function useRegisterCheckBoxes({ onCheckStatusChange }: Props) {
    const [checkedItems, setCheckedItems] = useState(createInitialCheckedItems);
    const [openModalId, setOpenModalId] = useState<string | null>(null);

    const allChecked = checkBoxes.every((box) => checkedItems[box.id]);

    const handleAllCheck = () => {
        const nextChecked = !allChecked;
        const updatedItems = Object.fromEntries(
            checkBoxes.map((box) => [box.id, nextChecked]),
        ) as Record<string, boolean>;

        setCheckedItems(updatedItems);
        onCheckStatusChange(
            checkBoxes
                .filter((box) => box.required)
                .every((box) => updatedItems[box.id]),
        );
    };

    const handleIndividualCheck = (id: string) => {
        setCheckedItems((prev) => {
            const updatedItems = {
                ...prev,
                [id]: !prev[id],
            };

            const requiredChecked = checkBoxes
                .filter((box) => box.required)
                .every((box) => updatedItems[box.id]);

            onCheckStatusChange(requiredChecked);
            return updatedItems;
        });
    };

    const handleModalToggle = (id: string) => {
        setOpenModalId((prev) => (prev === id ? null : id));
    };

    return {
        checkedItems,
        allChecked,
        openModalId,
        setOpenModalId,
        handleAllCheck,
        handleIndividualCheck,
        handleModalToggle,
    };
}
