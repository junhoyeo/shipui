import styled from '@emotion/styled'
import generateIdenticon from '@shipui/jazzicon'
import { useEffect, useState } from 'react'

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
  const [content, setContent] = useState<string | undefined>(undefined)
  useEffect(() => {
    setContent(generateIdenticon(ICON_SIZE, jsNumberForAddress(address), identiconColors).innerHTML)
  }, [address])

  const colors = useColors()

  return (
    <Container colors={colors}>
      <span dangerouslySetInnerHTML={{ __html: content || '' }}></span>
    </Container>
  )
}
const Container = styled.div<PaletteProps>`
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  border-radius: 50%;

  position: relative;
  overflow: hidden;

  & > span {
    background-color: ${({ colors }) => colors.primary};
  }

  &:before {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
