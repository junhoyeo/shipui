import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const textGradient = css`
  color: #1dbbff;
  background: linear-gradient(90deg, #1dbbff 20%, #8fdeff 50%, #1dbbff 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`
export const Gradient = styled.span`
  ${textGradient}
`
