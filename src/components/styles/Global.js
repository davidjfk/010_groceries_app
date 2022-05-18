import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }

    .list-item-title {
        width: 100px;
    }
`
export default GlobalStyles;