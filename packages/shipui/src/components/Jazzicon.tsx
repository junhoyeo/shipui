import styled from '@emotion/styled'
import generateIdenticon from '@shipui/jazzicon'
import { useMemo } from 'react'

import { PaletteProps, useColors } from '..'

// https://github.com/MetaMask/metamask-extension/blob/cedef121a36184cde4eae448ef510733fa301072/ui/helpers/utils/icon-factory.js#LL65-L69C2
const jsNumberForAddress = (address: string) => {
  const addr = address.toLowerCase().slice(2, 10)
  return parseInt(addr, 16)
}

export const ICON_SIZE = 24

export type JazziconProps = {
  address: string
  colors: string[]
}

export const Jazzicon: React.FC<JazziconProps> = ({ address, colors: identiconColors }) => {
  const html = useMemo(
    () => ({
      __html: generateIdenticon(ICON_SIZE, jsNumberForAddress(address), identiconColors).innerHTML,
    }),
    [address],
  )

  const colors = useColors()

  return (
    <Container colors={colors}>
      <span dangerouslySetInnerHTML={html}></span>
    </Container>
  )
}
const Container = styled.div<PaletteProps>`
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${({ colors }) => colors.opacity40};

  & > span {
    background-color: ${({ colors }) => colors.primary};
  }
`
