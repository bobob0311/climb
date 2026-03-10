import type { RegisterValidationParams } from '../types/register.types';
import { REGISTER_MESSAGES } from '../constants/registerMessages';
import validators from './validators';

function validateRegisterInput({
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

const validateInput = {
    id(value: string): string | null {
        if (!validators.isValidIdLength(value))
            return REGISTER_MESSAGES.idLength;

        if (!validators.isAlphaNumeric(value))
            return REGISTER_MESSAGES.idAlphaNumeric;

        return null;
    },

    password(value: string): string | null {
        if (!validators.isPasswordMinLength(value))
            return REGISTER_MESSAGES.passwordMinLength;

        if (!validators.hasNumberAndLetter(value))
            return REGISTER_MESSAGES.passwordComposition;

        return null;
    },
    nickname(value: string): string | null {
        if (!validators.isKoreanOnly(value))
            return REGISTER_MESSAGES.nicknameKoreanOnly;

        if (!validators.isValidNicknameLength(value))
            return REGISTER_MESSAGES.nicknameLength;

        return null;
    },
    passwordConfirm(value: string, targetValue?: string) {
        if (value != targetValue) return REGISTER_MESSAGES.passwordMismatch;
        return null;
    },
};

export { validateInput, validateRegisterInput };
