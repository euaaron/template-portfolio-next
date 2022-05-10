// import original module declarations
import 'styled-components';

interface IPattern {
  darker: string;
  main: string;
  lighter: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: IPattern;
      secondary: IPattern;
      success: IPattern;
      warning: IPattern;
      danger: IPattern;
      info: IPattern;
      background: IPattern;
      foreground: IPattern;
    };
  }
}