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

export async function checkLoginId(loginId: string): Promise<string> {
    if (shouldUseMockData()) return REGISTER_MESSAGES.loginIdAvailable;

    const res = await fetch(
        `${API_BASE_URL}/user/login-id?loginId=${encodeURIComponent(loginId)}`,
    );

    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }
    return REGISTER_MESSAGES.loginIdAvailable;
}

export async function checkNickname(nickname: string): Promise<string> {
    if (shouldUseMockData()) return REGISTER_MESSAGES.nicknameAvailable;

    const res = await fetch(
        `${API_BASE_URL}/user/nickname?nickname=${encodeURIComponent(nickname)}`,
    );

    if (!res.ok) {
        throw new Error(await parseErrorMessage(res));
    }
    return REGISTER_MESSAGES.nicknameAvailable;
}
