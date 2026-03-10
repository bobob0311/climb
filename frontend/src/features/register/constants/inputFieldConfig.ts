import { iconButtonHandler } from '../../../components/organisms/Register/utils';
import { validateInput } from '../utils/registerValidation';
import type { RegisterInputFieldConfig } from '../types/register.types';
const inputFields: RegisterInputFieldConfig[] = [
    {
        key: 'idRef',
        id: 'email-input',
        icon: 'x-circle',
        label: '아이디',
        type: 'text',
        iconAriaLabel: '아이디 지우기',
        onIconClick: iconButtonHandler.clearTextByRef,
        validations: validateInput.id,
    },
    {
        key: 'passwordRef',
        id: 'password-input',
        icon: 'eye-off',
        label: '비밀번호',
        type: 'password',
        iconAriaLabel: '비밀번호 보기',
        onIconClick: iconButtonHandler.togglePasswordVisibility,
        validations: validateInput.password,
    },
    {
        key: 'passwordConfirmRef',
        id: 'password-confirm-input',
        icon: 'eye-off',
        label: '비밀번호 확인',
        type: 'password',
        iconAriaLabel: '비밀번호 보기',
        onIconClick: iconButtonHandler.togglePasswordVisibility,
    },
    {
        key: 'nicknameRef',
        id: 'nickname-input',
        icon: 'x-circle',
        label: '닉네임',
        type: 'text',
        iconAriaLabel: '닉네임 지우기',
        onIconClick: iconButtonHandler.clearTextByRef,
        validations: validateInput.nickname,
    },
];

export default inputFields;
