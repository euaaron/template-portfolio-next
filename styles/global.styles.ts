import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: ${({ theme }) => theme.colors.primary.main};
  --color-primary-lighter: ${({ theme }) => theme.colors.primary.lighter};
  --color-primary-darker: ${({ theme }) => theme.colors.primary.darker};
  --color-secondary: ${({ theme }) => theme.colors.secondary.main};
  --color-secondary-lighter: ${({ theme }) => theme.colors.secondary.lighter};
  --color-secondary-darker: ${({ theme }) => theme.colors.secondary.darker};
  --color-background-darker: ${({ theme }) => theme.colors.background.darker};
  --color-background: ${({ theme }) => theme.colors.background.main};
  --color-background-lighter: ${({ theme }) => theme.colors.background.lighter};
  --color-foreground-lighter: ${({ theme }) => theme.colors.foreground.lighter};
  --color-foreground: ${({ theme }) => theme.colors.foreground.main};
  --color-foreground-darker: ${({ theme }) => theme.colors.foreground.darker};
  --color-success: ${({ theme }) => theme.colors.success.main};
  --color-success-lighter: ${({ theme }) => theme.colors.success.lighter};
  --color-success-darker: ${({ theme }) => theme.colors.success.darker};
  --color-warning: ${({ theme }) => theme.colors.warning.main};
  --color-warning-lighter: ${({ theme }) => theme.colors.warning.lighter};
  --color-warning-darker: ${({ theme }) => theme.colors.warning.darker};
  --color-danger: ${({ theme }) => theme.colors.danger.main};
  --color-danger-lighter: ${({ theme }) => theme.colors.danger.lighter};
  --color-danger-darker: ${({ theme }) => theme.colors.danger.darker};
  --color-info: ${({ theme }) => theme.colors.info.main};
  --color-info-lighter: ${({ theme }) => theme.colors.info.lighter};
  --color-info-darker: ${({ theme }) => theme.colors.info.darker};
}

html,
body {
  padding: 0;
  margin: 0;  
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  background: var(--color-background);
  color: var(--color-foreground);
}

code {
  background-color: var(--color-background-darker);
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;