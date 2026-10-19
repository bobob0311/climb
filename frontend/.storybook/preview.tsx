import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from '@emotion/react';
import { MemoryRouter } from 'react-router-dom';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { theme } from '../src/theme/theme';
import '../src/index.css';

const preview: Preview = {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </ThemeProvider>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
