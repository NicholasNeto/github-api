import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75% //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5% // 14px
        }

        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }
`