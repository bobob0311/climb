import { css } from '@emotion/react';

import backgroundImg from '../../assets/bg.png';

import { HeadlineHeading } from '../../components/atoms/Heading/Heading';
import { useNavigate } from 'react-router-dom';
import type { Theme } from '@emotion/react';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div css={wrppaerStyles}>
            <img src={backgroundImg} alt='' css={backgroundImgStyle} />
            <HeadlineHeading HeadingTag='h1'>
                지금 들어오신 페이지는 없는 페이지 입니다.
            </HeadlineHeading>
            <button css={buttonStyles} onClick={() => navigate('/')}>
                홈으로
            </button>
        </div>
    );
}

const backgroundImgStyle = css`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
    user-select: none;
`;

const wrppaerStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100dvh - 5rem);
    gap: 4rem;

    padding-bottom: 5rem;
    box-sizing: border-box;
`;

const buttonStyles = (theme: Theme) => css`
    all: unset;
    color: ${theme.colors.grey[100]};
    font-size: ${theme.typography.fontSize.title};
    font-weight: ${theme.typography.fontWeight.bold};
    width: 10rem;
    height: 4rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${theme.colors.status.normal.excellent};

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;
