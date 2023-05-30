import styled from '@emotion/styled'

import { PaletteProps, useColors } from '..'

const _Input = styled.input<PaletteProps>`
  width: 100%;
  padding: 16px;
  border: 0;
  border-radius: 8px;
  background-color: ${({ colors }) => colors.background};
`
export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const colors = useColors()
  return <_Input colors={colors} {...props} />
}
