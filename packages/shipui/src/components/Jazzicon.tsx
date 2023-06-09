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

export type JazziconProps = React.HTMLAttributes<HTMLDivElement> & {
  address: string
  colors: string[]
  size?: number
}

export const Jazzicon: React.FC<JazziconProps> = ({
  address,
  colors: identiconColors,
  size = ICON_SIZE,
  ...props
}) => {
  const [content, setContent] = useState<string | undefined>(undefined)
  useEffect(() => {
    const identicon = generateIdenticon(size, jsNumberForAddress(address), identiconColors)
    const html = identicon.innerHTML
    setContent(html)
  }, [address, size, identiconColors])

  const colors = useColors()

  return (
    <Container colors={colors} style={{ width: size, height: size, ...props.style }} {...props}>
      <span dangerouslySetInnerHTML={{ __html: content || '' }}></span>
    </Container>
  )
}
const Container = styled.div<PaletteProps>`
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
