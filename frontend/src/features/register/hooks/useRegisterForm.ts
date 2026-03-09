import { useRef } from 'react';
import type {
    RegisterConfirmationRefs,
    RegisterFormValues,
    RegisterInputRefs,
} from '../../../types/register.types';

export default function useRegisterForm(): {
    refs: RegisterInputRefs;
    confirmations: RegisterConfirmationRefs;
    getFormValues: () => RegisterFormValues;
    markConfirmedId: (value: string) => void;
    markConfirmedNickname: (value: string) => void;
    setCheckBoxValid: (isValid: boolean) => void;
} {
    const idRef = useRef<HTMLInputElement>(null!);
    const passwordRef = useRef<HTMLInputElement>(null!);
    const passwordConfirmRef = useRef<HTMLInputElement>(null!);
    const nicknameRef = useRef<HTMLInputElement>(null!);

    const confirmedIdRef = useRef('');
    const confirmedNicknameRef = useRef('');
    const checkBoxValidRef = useRef(false);

    const getFormValues = (): RegisterFormValues => ({
        loginId: idRef.current?.value ?? '',
        nickname: nicknameRef.current?.value ?? '',
        password: passwordRef.current?.value ?? '',
        passwordConfirm: passwordConfirmRef.current?.value ?? '',
    });

    return {
        refs: {
            idRef,
            passwordRef,
            passwordConfirmRef,
            nicknameRef,
        },
        confirmations: {
            confirmedIdRef,
            confirmedNicknameRef,
            checkBoxValidRef,
        },
        getFormValues,
        markConfirmedId: (value: string) => {
            confirmedIdRef.current = value;
        },
        markConfirmedNickname: (value: string) => {
            confirmedNicknameRef.current = value;
        },
        setCheckBoxValid: (isValid: boolean) => {
            checkBoxValidRef.current = isValid;
        },
    };
}
