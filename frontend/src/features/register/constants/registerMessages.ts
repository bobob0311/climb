export const REGISTER_MESSAGES = {
    duplicateLoginIdRequired: '아이디 중복 확인이 필요합니다.',
    duplicateNicknameRequired: '닉네임 중복 확인이 필요합니다.',
    passwordRequired: '비밀번호를 입력해주세요.',
    passwordMismatch: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
    requiredCheckBox: '필수 체크 항목을 확인해주세요.',
    loginIdAvailable: 'id가 중복되지 않습니다.',
    nicknameAvailable: '닉네임이 중복되지 않습니다.',
    signUpSuccess: '회원가입 되셨습니다.',

    idLength: '아이디는 6자 이상, 20자 이하이어야 합니다.',
    idAlphaNumeric: '아이디는 영어와 숫자만 사용할 수 있습니다.',

    passwordMinLength: '비밀번호는 8자 이상이어야 합니다.',
    passwordComposition: '영문과 숫자를 포함해야 합니다.',

    nicknameKoreanOnly: '한글로 된 닉네임만 가능합니다.',
    nicknameLength: '닉네임은 2자 이상, 20자 이하이어야 합니다.',
} as const;
