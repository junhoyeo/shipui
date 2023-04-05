import styled from '@emotion/styled'

import { DefaultColors } from '@/utils/colors'

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 132%;
  letter-spacing: -0.02em;
  color: ${DefaultColors.text};

  .keyword {
    color: ${DefaultColors.keyword};
  }
`
