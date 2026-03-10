import { css } from '@emotion/react';
import { theme } from '../../../theme/theme.ts';
import { useState } from 'react';

import useForecastCardData from '../../../features/forecast/hooks/useForecastCardData.ts';

import Icon from '../../atoms/Icon/Icons.tsx';
import WeatherSummaryCardHeader from '../../molecules/Forecast/WeatherSummaryCardHeader.tsx';
import LoginRequiredModal from '../../molecules/Modal/LoginRequiredModal.tsx';
import FrontWeatherSummaryCard from './FrontWeatherSummaryCard.tsx';
import BackWeatherSummaryCard from './BackWeatherSummaryCard.tsx';
import Modal from '../../molecules/Modal/RegisterModal.tsx';
import CommonPendingModal from '../../molecules/Modal/CommonPending.tsx';
import useStoreMountainCard from '../../../features/forecast/hooks/useStroeMountainCard.ts';

interface Props {
    onClose: () => void;
    scrollSelectedTime: string;
    selectedCourseId: number;
}

export default function WeatherSummaryCardModal({
    onClose,
    scrollSelectedTime,
    selectedCourseId,
}: Props) {
    const [isFront, setIsFront] = useState<boolean>(true);

    const { frontCard, backCard, isLoading, isError } = useForecastCardData(
        selectedCourseId,
        scrollSelectedTime,
    );

    const {
        errorMessage,
        isExpiredModalOpen,
        handleStoreMountainCard,
        closeErrorMessage,
        closeExpiredModal,
    } = useStoreMountainCard({
        selectedCourseId,
        scrollSelectedTime,
        onSuccessClose: onClose,
    });

    const handleFlipCard = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsFront((prev) => !prev);
    };

    const handleStoreButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        handleStoreMountainCard();
    };

    if (isLoading) return <CommonPendingModal />;

    return (
        <div css={overlayStyles}>
            <WeatherSummaryCardHeader />

            <div
                css={modalStyles(isFront, frontCard.mountainImageUrl)}
                onClick={handleFlipCard}
            >
                <div className='front'>
                    <FrontWeatherSummaryCard
                        cardData={frontCard}
                        onClose={onClose}
                    />
                </div>
                <div className='back'>
                    <BackWeatherSummaryCard cardData={backCard} />
                </div>
            </div>

            <button onClick={handleStoreButtonClick} css={storeBtnStyles}>
                <Icon
                    name='download-02'
                    width={1.4}
                    height={1.4}
                    color='grey-100'
                />
            </button>

            {errorMessage && (
                <LoginRequiredModal
                    text={errorMessage}
                    onClose={closeErrorMessage}
                />
            )}

            {isError && (
                <Modal onClose={() => window.location.reload()}>
                    데이터 페칭중 오류가 발생했습니다. 새로고침을 통해 다시
                    시도해주세요.
                </Modal>
            )}

            {isExpiredModalOpen && (
                <LoginRequiredModal
                    text='로그인 유효시간이 지났습니다.'
                    onClose={closeExpiredModal}
                />
            )}
        </div>
    );
}

const { colors } = theme;

const overlayStyles = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.greyOpacity[10]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 2000;
`;

const modalStyles = (isFront: boolean, mountainImageUrl?: string) => css`
    width: 22rem;
    height: 35rem;
    cursor: pointer;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    transform: ${isFront ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    .front,
    .back {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        box-sizing: border-box;
        backface-visibility: hidden;
        top: 0;
        left: 0;
    }

    .front {
        background: ${mountainImageUrl
            ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mountainImageUrl}) no-repeat center center / cover`
            : colors.grey[20]};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem;
    }

    .back {
        background: ${colors.grey[100]};
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem;
    }
`;

const storeBtnStyles = css`
    all: unset;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 28%;
    left: calc(50% + 13rem);
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: ${colors.grey[40]};
    padding: 0 3px 5px 0;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
