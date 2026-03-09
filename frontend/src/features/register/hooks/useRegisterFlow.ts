import { useState } from 'react';
import useApiMutation from '../../../hooks/useApiMutation';
import { REGISTER_MESSAGES } from '../constants/registerMessages';
import useRegisterForm from './useRegisterForm';

import { checkLoginId, checkNickname } from '../services/registerService';

import { validateRegisterInput } from '../utils/registerValidation';
import type { SignUpRequest, SignUpResponse } from '../types/register.types';

export default function useRegisterFlow(onSignUpSuccess: () => void) {
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {
        refs,
        confirmations,
        getFormValues,
        markConfirmedId,
        markConfirmedNickname,
        setCheckBoxValid,
    } = useRegisterForm();

    const mutation = useApiMutation<SignUpRequest, SignUpResponse>(
        '/user/sign-up',
        'POST',
        {
            onSuccess: () => {
                setModalMessage(REGISTER_MESSAGES.signUpSuccess);
            },
            onError: (error: Error) => setModalMessage(error.message),
            onMutate: () => setIsLoading(true),
            onSettled: () => setIsLoading(false),
        },
    );

    const handleRegister = () => {
        const { loginId, nickname, password, passwordConfirm } =
            getFormValues();

        const errorMessage = validateRegisterInput({
            loginId,
            nickname,
            password,
            passwordConfirm,
            confirmedId: confirmations.confirmedIdRef.current,
            confirmedNickname: confirmations.confirmedNicknameRef.current,
            checkBox: confirmations.checkBoxValidRef.current,
        });

        if (errorMessage) {
            setModalMessage(errorMessage);
            return;
        }

        mutation.mutate({ loginId, nickname, password });
    };

    const handleCheckId = async () => {
        const { loginId } = getFormValues();

        try {
            const successMessage = await checkLoginId(loginId);
            setModalMessage(successMessage);
            markConfirmedId(loginId);
        } catch (error) {
            setModalMessage((error as Error).message);
        }
    };

    const handleCheckNickname = async () => {
        const { nickname } = getFormValues();

        try {
            const successMessage = await checkNickname(nickname);
            setModalMessage(successMessage);
            markConfirmedNickname(nickname);
        } catch (error) {
            setModalMessage((error as Error).message);
        }
    };

    const closeModal = () => {
        if (mutation.isSuccess) {
            onSignUpSuccess();
            return;
        }

        setModalMessage('');
    };

    return {
        refs,
        modalMessage,
        isLoading,
        handleRegister,
        handleCheckId,
        handleCheckNickname,
        setCheckBoxValid,
        closeModal,
    };
}
