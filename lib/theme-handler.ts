import { DefaultTheme } from "styled-components";
import themeList from "../styles/themes";

export class ThemeHandler {
  private static instance: ThemeHandler = new ThemeHandler();
  private defaultThemeName: string;
  private currentTheme: DefaultTheme;
  private themes: DefaultTheme[];
  private storageKey;

  private constructor() {
    this.themes = themeList;
    this.storageKey = "theme";
    this.defaultThemeName = "Default Dark";
    this.currentTheme = this.themes.filter(theme => theme.name === this.defaultThemeName)[0];
  }

  public static getInstance(): ThemeHandler {
    return this.instance;
  }

  public getTheme(): DefaultTheme {
    const themeName = window.localStorage.getItem(this.storageKey);
    if (themeName) {
      this.currentTheme = this.themes.filter(theme => theme.name === themeName)[0];
    }
    return this.currentTheme;
  }

  public setTheme(themeName: string): void {
    window.localStorage.setItem(this.storageKey, themeName);
    this.currentTheme = this.themes.filter(theme => theme.name === themeName)[0];
  }

}