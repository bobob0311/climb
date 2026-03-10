import { css } from '@emotion/react';
import FormButton from '../../atoms/Button/FormButton.tsx';
import TextInputWithIcon from '../../molecules/Input/TextInputWithIcon.tsx';
import RegisterCheckBoxes from '../Register/RegisterCheckBoxes.tsx';
import type { RegisterInputField } from '../../../features/register/types/register.types';

interface PropsState {
    inputFieldsWithRef: RegisterInputField[];
    onClickRegister: () => void;
    onClickCheckId: () => void;
    onClickCheckNickName: () => void;
    onCheckStatusChange: (isValid: boolean) => void;
}

export default function RegisterForm({
    inputFieldsWithRef,
    onClickRegister,
    onClickCheckId,
    onClickCheckNickName,
    onCheckStatusChange,
}: PropsState) {
    const fieldMap = Object.fromEntries(
        inputFieldsWithRef.map((field) => [field.key, field]),
    );

    return (
        <form css={formWrapperStyles}>
            <TextInputWithIcon {...fieldMap.idRef} />
            <FormButton
                type='button'
                onClick={onClickCheckId}
                text='아이디 중복확인'
            />

            <TextInputWithIcon {...fieldMap.passwordRef} />
            <TextInputWithIcon {...fieldMap.passwordConfirmRef} />

            <TextInputWithIcon {...fieldMap.nicknameRef} />
            <FormButton
                type='button'
                onClick={onClickCheckNickName}
                text='닉네임 중복확인'
            />

            <RegisterCheckBoxes onCheckStatusChange={onCheckStatusChange} />
            <FormButton onClick={onClickRegister} text='회원가입하기' />
        </form>
    );
}

const formWrapperStyles = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
