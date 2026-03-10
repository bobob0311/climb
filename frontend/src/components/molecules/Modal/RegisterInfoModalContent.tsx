import { css } from '@emotion/react';

interface Props {
    title: string;
    content: string;
}

export default function ({ title, content }: Props) {
    return (
        <div css={modalContent}>
            <h2>{title}</h2>
            <pre>{content}</pre>
        </div>
    );
}

const modalContent = css`
    width: 40rem;
    height: 38rem;
`;
