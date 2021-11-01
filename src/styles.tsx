import { createGlobalStyle, DefaultTheme } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  fontColor: "#272727d4",
  bgColor: "#fafafa",
  accent: "#0095f6", //차별점 색깔
  borderColor: "rgb(219,219,219)",
  boxColor: "white",
  inputColor: "#fafafa",
  boxShadow_1: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  boxShadow_2: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
  boxShadow_3: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  boxShadow_4: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  placeholderColor: "#9c9c9c;",
  changeColor: "#222222a2;",
  subFontColor: "rgba(var(--f52,142,142,142),1)",
  linkFontColor: "#00376b",
  facebookFontColor: "#385285",
  wrapperWidth: "930px",
};
export const darkTheme: DefaultTheme = {
  fontColor: "#F0F4F8",
  bgColor: "#121212",
  accent: "#70c6ffcc", //차별점 색깔
  borderColor: "#242424d8",
  boxColor: "#373737",
  inputColor: "#ffffff83",
  boxShadow_1: "0px 5px 13px rgba(0, 0, 0, 1)",
  boxShadow_2: "rgba(0, 0, 0, 1) 0px 1px 4px;",
  boxShadow_3: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  boxShadow_4: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
  placeholderColor: "#222222a2;",
  changeColor: "#b6b6b6;",
  subFontColor: "#f0f4f8a2",
  linkFontColor: "#2576c7",
  facebookFontColor: "#74a2ffb8",
  wrapperWidth: "930px",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Norican&family=Satisfy&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');
    input{
      all:unset
    }
    *{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      box-sizing: border-box;
    }
    a{
      
      text-decoration: none;
    }
    body{
      font-size: 14px;
        color:${(props) => props.theme.fontColor};
        background-color:${(props) => props.theme.bgColor};
    }

`;
