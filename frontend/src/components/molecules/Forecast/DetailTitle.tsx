import { css } from '@emotion/react';
import { DisplayHeading } from '../../atoms/Heading/Heading';
import CommonText from '../../atoms/Text/CommonText';

interface PropsState {
    recommendComment: string;
    startTimeFromNowString: string;
}

export default function DetailTitle({
    recommendComment,
    startTimeFromNowString,
}: PropsState) {
    return (
        <DisplayHeading HeadingTag='h1'>
            <span css={displayHeadingStyle}>
                {startTimeFromNowString}
                <CommonText
                    TextTag='span'
                    fontSize='display'
                    fontWeight='regular'
                    color='greyOpacityWhite-40'
                >
                    에 출발하면
                </CommonText>
            </span>
            <span css={lineGroupStyle}>{recommendComment}</span>
        </DisplayHeading>
    );
}

const displayHeadingStyle = css`
    line-height: 1.5;
    white-space: normal;
    margin-bottom: 1rem;
`;

const lineGroupStyle = css`
    display: block;
`;
