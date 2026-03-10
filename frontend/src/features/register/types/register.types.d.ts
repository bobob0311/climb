import type { MutableRefObject, RefObject } from 'react';

export interface SignUpRequest {
    nickname: string;
    loginId: string;
    password: string;
}

export interface SignUpResponse {
    message: string;
}

export interface RegisterFormValues {
    loginId: string;
    nickname: string;
    password: string;
    passwordConfirm: string;
}

export interface RegisterValidationParams extends RegisterFormValues {
    confirmedId: string;
    confirmedNickname: string;
    checkBox: boolean;
}

export interface RegisterInputRefs {
    idRef: RefObject<HTMLInputElement>;
    passwordRef: RefObject<HTMLInputElement>;
    passwordConfirmRef: RefObject<HTMLInputElement>;
    nicknameRef: RefObject<HTMLInputElement>;
}

export interface RegisterConfirmationRefs {
    confirmedIdRef: MutableRefObject<string>;
    confirmedNicknameRef: MutableRefObject<string>;
    checkBoxValidRef: MutableRefObject<boolean>;
}

export type RegisterInputRefKey =
    | 'idRef'
    | 'passwordRef'
    | 'passwordConfirmRef'
    | 'nicknameRef';

export interface RegisterInputFieldConfig {
    key: RegisterInputRefKey;
    id: string;
    icon: string;
    label: string;
    type: 'text' | 'password';
    iconAriaLabel: string;
    onIconClick: (ref: React.RefObject<HTMLInputElement>) => void;
    validations?: (value: string) => string | null;
}

export interface RegisterInputField extends RegisterInputFieldConfig {
    inputRef: React.RefObject<HTMLInputElement>;
}
