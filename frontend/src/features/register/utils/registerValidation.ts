import type { RegisterValidationParams } from '../types/register.types';
import { REGISTER_MESSAGES } from '../constants/registerMessages';

export function validateRegisterInput({
    loginId,
    confirmedId,
    nickname,
    confirmedNickname,
    password,
    passwordConfirm,
    checkBox,
}: RegisterValidationParams): string {
    if (loginId !== confirmedId || !confirmedId) {
        return REGISTER_MESSAGES.duplicateLoginIdRequired;
    }

    if (nickname !== confirmedNickname || !confirmedNickname) {
        return REGISTER_MESSAGES.duplicateNicknameRequired;
    }

    if (!password) {
        return REGISTER_MESSAGES.passwordRequired;
    }

    if (password !== passwordConfirm) {
        return REGISTER_MESSAGES.passwordMismatch;
    }

    if (!checkBox) {
        return REGISTER_MESSAGES.requiredCheckBox;
    }

    return '';
}
