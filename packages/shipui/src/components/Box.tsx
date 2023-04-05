import styled from '@emotion/styled'

import { DefaultColors } from '@/utils/colors'

import { Col } from './Col'

export const Box = styled(Col)`
  padding: 20px;
  width: 100%;

  border-radius: 20px;
  background-color: ${DefaultColors.foreground};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
`
