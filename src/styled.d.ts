import "styled-components";
import "sanitize-html";

declare module "styled-components" {
  export interface DefaultTheme {
    fontColor: string;
    subFontColor: string;
    linkFontColor: string;
    facebookFontColor: string;
    wrapperWidth: string;
    bgColor: string;
    accent: string;
    borderColor: string;
    boxColor: string;
    inputColor: string;
    boxShadow_1: string;
    boxShadow_2: string;
    boxShadow_3: string;
    boxShadow_4: string;
    changeColor: string;
    placeholderColor: string;
  }
}
