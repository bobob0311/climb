import type { ColorValueType } from '../../../types/themeTypes';

interface CheckBoxItem {
    id: string;
    text: string;
    required: boolean;
    modalType?: 'terms' | 'privacy';
    subTitle?: string;
    grey?: number;
}

export const allCheckBox = {
    id: 'all-check-box',
    text: '모두 동의합니다.',
    subTitle: '선택 동의 항목 포함',
    grey: 98 as ColorValueType,
    required: false,
};

export const checkBoxes: CheckBoxItem[] = [
    { id: 'age', text: '[필수] 만 14세 이상입니다', required: true },
    {
        id: 'terms',
        text: '[필수] 이용약관 동의',
        required: true,
        modalType: 'terms',
    },
    {
        id: 'privacy',
        text: '[선택] 개인정보 마케팅 활용 동의',
        required: false,
        modalType: 'privacy',
    },
    {
        id: 'event',
        text: '[선택] 이벤트, 알림 및 SMS 등 수신',
        required: false,
    },
];
