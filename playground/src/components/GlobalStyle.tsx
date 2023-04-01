import { Global, css } from '@emotion/react'
import reset from 'emotion-reset'

import { systemFontStack } from '@/styles/fonts'
import { Colors } from '@/utils/colors'

export const GlobalStyle: React.FC = () => (
  <Global
    styles={css`
      ${reset}

      :root {
        --SystemFontStack: ${systemFontStack};
      }

      html,
      body {
        background: ${Colors.background};
      }

      * {
        box-sizing: border-box;
        word-break: keep-all;

        &:not(button):lang(ja) {
          word-break: break-word;
        }
      }

      *:not(code, code *) {
        box-sizing: border-box !important;
        word-break: keep-all;
        font-family: var(--SystemFontStack) !important;
      }

      a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
      }

      input,
      button {
        outline: 0;
        background-color: transparent;
      }

      button {
        cursor: pointer;
      }

      img {
        -webkit-user-drag: none;
        user-select: none;
      }

      ::selection {
        color: rgba(255, 255, 255, 0.85) !important;
        background-color: rgba(29, 187, 255, 0.45) !important;
      }
    `}
  />
)
