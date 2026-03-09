import { shouldUseMockData } from '../../../mocks/mockApi';
import { REGISTER_MESSAGES } from '../constants/registerMessages';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function parseErrorMessage(res: Response) {
    const text = await res.text();

    try {
        const errorData = JSON.parse(text);
        return errorData.message ?? text;
    } catch {
        return text;
    }
}

export async function checkLoginId(loginId: string): Promise<void> {
    if (shouldUseMockData()) return;

    const res = await fetch(
        `${API_BASE_URL}/user/login-id?loginId=${encodeURIComponent(loginId)}`,
    );

    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }
}

export async function checkNickname(nickname: string): Promise<void> {
    if (shouldUseMockData()) return;

    const res = await fetch(
        `${API_BASE_URL}/user/nickname?nickname=${encodeURIComponent(nickname)}`,
    );

    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }
}

export function getMockedSuccessMessage(type: 'loginId' | 'nickname') {
    return type === 'loginId'
        ? REGISTER_MESSAGES.loginIdAvailable
        : REGISTER_MESSAGES.nicknameAvailable;
}
