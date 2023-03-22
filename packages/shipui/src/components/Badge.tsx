import styled from '@emotion/styled'

import { PaletteProps, useColors } from '@/utils/colors'

const _Badge = styled.span<PaletteProps>`
  padding: 2px 4px;
  border-radius: 4px;
  background-color: ${({ colors }) => colors.opacity35};
  border: 2px solid ${({ colors }) => colors.opacity65};
  backdrop-filter: blur(4px);

  font-weight: 600;
  font-size: 12px;
  line-height: 132%;
  color: ${({ colors }) => colors.primary};
  user-select: none;
`
export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, ...props }) => {
  const colors = useColors()
  return (
    <_Badge colors={colors} {...props}>
      {children}
    </_Badge>
  )
}
