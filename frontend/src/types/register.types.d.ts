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
