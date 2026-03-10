import { useState } from 'react';
import useApiMutation from '../../../hooks/useApiMutation.ts';
import { validateAccessToken } from '../../../utils/utils.ts';

interface Params {
    selectedCourseId: number;
    scrollSelectedTime: string;
    onSuccessClose: () => void;
}

export default function useStoreMountainCard({
    selectedCourseId,
    scrollSelectedTime,
    onSuccessClose,
}: Params) {
    const [errorMessage, setErrorMessage] = useState('');
    const [isExpiredModalOpen, setIsExpiredModalOpen] = useState(false);

    const storeMountainCardMutation = useApiMutation<any>(
        `/card/interaction/history/${selectedCourseId}`,
        'PUT',
        {
            onSuccess: () => {
                alert('최근 본 등산목록에 추가되었습니다.');
                onSuccessClose();
            },
            onError: () => {
                alert('잠시후 다시 시도해주세요.');
            },
        },
        { startDateTime: scrollSelectedTime },
    );

    const handleStoreMountainCard = () => {
        const accessToken =
            localStorage.getItem('accessToken') ??
            sessionStorage.getItem('accessToken');

        if (!accessToken) {
            setErrorMessage('로그인이 필요한 서비스입니다.');
            return;
        }

        if (validateAccessToken()) {
            storeMountainCardMutation.mutate({});
            return;
        }

        setIsExpiredModalOpen(true);
    };

    const closeErrorMessage = () => {
        setErrorMessage('');
    };

    const closeExpiredModal = () => {
        setIsExpiredModalOpen(false);
    };

    return {
        errorMessage,
        isExpiredModalOpen,
        handleStoreMountainCard,
        closeErrorMessage,
        closeExpiredModal,
    };
}
