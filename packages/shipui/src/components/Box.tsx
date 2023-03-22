import styled from '@emotion/styled'

import { DefaultColors } from '@/utils/colors'

export const Box = styled.div`
  padding: 20px;
  width: 100%;

  border-radius: 20px;
  background-color: ${DefaultColors.foreground};

  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
`
