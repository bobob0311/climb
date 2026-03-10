import { css } from '@emotion/react';
import CheckBox from '../../atoms/Form/CheckBox.tsx';
import { theme } from '../../../theme/theme.ts';
import Modal from '../../molecules/Modal/RegisterModal.tsx';
import {
    allCheckBox,
    checkBoxes,
} from '../../../features/register/constants/registerCheckBoxesConfig.ts';
import RegisterInfoModalContent from '../../molecules/Modal/RegisterInfoModalContent.tsx';
import info from '../../../features/register/constants/privacy.ts';
import useRegisterCheckBoxes from '../../../features/register/hooks/useRegisterCheckBoxes.ts';
interface PropsState {
    onCheckStatusChange: (isValid: boolean) => void;
}

export default function RegisterCheckBoxes({
    onCheckStatusChange,
}: PropsState) {
    const {
        checkedItems,
        allChecked,
        openModalId,
        setOpenModalId,
        handleAllCheck,
        handleIndividualCheck,
        handleModalToggle,
    } = useRegisterCheckBoxes({ onCheckStatusChange });

    return (
        <>
            <CheckBox
                {...allCheckBox}
                onChange={handleAllCheck}
                checked={allChecked}
            />
            <div css={checkBoxStyles}>
                {checkBoxes.map((box) => (
                    <div key={box.id} css={checkLineWrapper}>
                        <CheckBox
                            key={box.id}
                            id={box.id}
                            text={box.text}
                            onChange={() => handleIndividualCheck(box.id)}
                            checked={checkedItems[box.id]}
                        />
                        {box.modalType && (
                            <button
                                type='button'
                                css={buttonStyles}
                                onClick={() => handleModalToggle(box.id)}
                            >
                                내용 보기
                            </button>
                        )}
                        {openModalId === box.id && (
                            <Modal onClose={() => setOpenModalId(null)}>
                                <RegisterInfoModalContent
                                    title={info[box.modalType!].title}
                                    content={info[box.modalType!].content}
                                />
                            </Modal>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

const { colors } = theme;

const checkBoxStyles = css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

const checkLineWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const buttonStyles = css`
    all: unset;
    color: ${colors.grey[70]};
    font-size: 0.75rem;
    cursor: pointer;
    border-bottom: 1px solid ${colors.grey[70]};
`;
