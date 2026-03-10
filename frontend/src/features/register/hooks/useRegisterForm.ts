import { useRef } from 'react';
import type {
    RegisterConfirmationRefs,
    RegisterFormValues,
    RegisterInputField,
} from '../types/register.types';
import inputFields from '../constants/inputFieldConfig';
import { validateInput } from '../utils/registerValidation';

export default function useRegisterForm(): {
    inputFieldsWithRef: RegisterInputField[];
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

    const refs = {
        idRef,
        passwordRef,
        passwordConfirmRef,
        nicknameRef,
    };

    const inputFieldsWithRef = inputFields.map((field) => {
        const baseField = {
            ...field,
            inputRef: refs[field.key],
        };

        if (field.key === 'passwordConfirmRef') {
            return {
                ...baseField,
                validations: (value: string) =>
                    validateInput.passwordConfirm(
                        value,
                        refs.passwordRef.current?.value ?? '',
                    ),
            };
        }

        if (field.key === 'passwordRef') {
            return {
                ...baseField,
                onInput: () => {
                    refs.passwordConfirmRef.current?.dispatchEvent(
                        new Event('input', { bubbles: true }),
                    );
                },
            };
        }

        return baseField;
    });

    return {
        inputFieldsWithRef,
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
