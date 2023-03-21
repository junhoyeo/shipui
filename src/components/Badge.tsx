import styled from '@emotion/styled'

import { Colors } from '@/utils/colors'

export const Badge = styled.span`
  padding: 2px 4px;
  border-radius: 4px;
  background-color: ${Colors.opacity35};
  border: 2px solid ${Colors.opacity65};
  backdrop-filter: blur(4px);

  font-weight: 600;
  font-size: 12px;
  line-height: 132%;
  color: ${Colors.primary};
  user-select: none;
`
