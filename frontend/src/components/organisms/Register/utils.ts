const iconButtonHandler = {
    clearTextByRef(ref: React.RefObject<HTMLInputElement>) {
        if (ref.current) {
            ref.current.value = '';
        }
    },

    togglePasswordVisibility(ref: React.RefObject<HTMLInputElement>) {
        if (ref.current) {
            ref.current.type =
                ref.current.type === 'password' ? 'text' : 'password';
        }
    },
};

export { iconButtonHandler };
