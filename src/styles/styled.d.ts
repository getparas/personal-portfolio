import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      secondaryV2: string;
      bgGray: string;
    };
    fonts: {
      body: string;
    };
  }
}
