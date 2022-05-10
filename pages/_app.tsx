import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { GlobalStyle } from "../styles/global.styles";
import defaultTheme from "../styles/themes/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
