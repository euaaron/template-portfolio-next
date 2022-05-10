import type { AppProps } from "next/app";
import React, { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { TopBar } from "../components/TopBar";
import { GlobalStyle } from "../styles/global.styles";
import themeList from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<string>("Default Dark");
  const [theme, setTheme] = useState<DefaultTheme>(
    themeList.filter((item) => item.name === themeName)[0]
  );

  const toggleTheme = () => {
    themeName === "Default Dark"
      ? setThemeName("Default Light")
      : setThemeName("Default Dark");

    setTheme(themeList.filter((item) => item.name === themeName)[0]);
  };

  return (
    <ThemeProvider theme={theme}>
      <TopBar>
        <ThemeToggle toggleTheme={toggleTheme} />
      </TopBar>
      <GlobalStyle />
      <div id="pageContent">
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
