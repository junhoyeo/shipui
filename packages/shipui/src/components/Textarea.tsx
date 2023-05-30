import styled from '@emotion/styled'

import { PaletteProps, useColors } from '..'

const _Textarea = styled.textarea<PaletteProps>`
  width: 100%;
  padding: 16px;
  border: 0;
  resize: none;
  border-radius: 8px;
  background-color: ${({ colors }) => colors.background};
`
export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  const colors = useColors()
  return <_Textarea colors={colors} {...props} />
}
