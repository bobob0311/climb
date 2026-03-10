import { css } from '@emotion/react';
import RegisterHeader from '../../molecules/Register/RegisterHeader.tsx';
import RegisterForm from '../../organisms/Register/RegisterForm.tsx';
import { useNavigate } from 'react-router-dom';
import Modal from '../../molecules/Modal/RegisterModal.tsx';
import PendingModal from '../../molecules/Modal/ReportPendingModal.tsx';
import useRegisterFlow from '../../../features/register/hooks/useRegisterFlow.ts';

export default function RegisterFormSection() {
    const navigate = useNavigate();

    const {
        inputFieldsWithRef,
        modalMessage,
        isLoading,
        handleRegister,
        handleCheckId,
        handleCheckNickname,
        setCheckBoxValid,
        closeModal,
    } = useRegisterFlow(() => navigate('/login'));

    return (
        <div css={wrapperStyles}>
            <RegisterHeader />
            <RegisterForm
                inputFieldsWithRef={inputFieldsWithRef}
                onClickRegister={handleRegister}
                onClickCheckId={handleCheckId}
                onClickCheckNickName={handleCheckNickname}
                onCheckStatusChange={(isValid: boolean) =>
                    setCheckBoxValid(isValid)
                }
            />
            {modalMessage && (
                <Modal onClose={closeModal}>
                    <div css={preStyles}>{modalMessage}</div>
                </Modal>
            )}
            {isLoading && <PendingModal />}
        </div>
    );
}

const wrapperStyles = css`
    width: 29rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const preStyles = css`
    display: block;
    white-space: pre-wrap;
    line-height: 1.5;
    text-align: center;
`;
