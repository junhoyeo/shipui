import styled from '@emotion/styled'
import Link from 'next/link'
import { useCallback, useState } from 'react'

import { PaletteProps, useColors } from '@/utils/colors'

type SidebarItem = { title: string; url: string }
type SidebarProps = {
  selected?: string
  items: SidebarItem[]
}

export const Sidebar: React.FC<SidebarProps> = ({ selected, items }) => {
  const colors = useColors()
  const [offset, setOffset] = useState<number>(0)

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement
      const item = items.find((item) => item.title === target.innerText.trim())
      if (!item) {
        setOffset(0)
        return
      }
      const index = items.indexOf(item)
      setOffset(index * 48)
    },
    [items],
  )

  const onMouseLeave = useCallback(() => {
    const item = items.find((item) => item.url === selected)
    if (!item) {
      setOffset(0)
      return
    }
    const index = !selected ? 0 : items.indexOf(item)
    setOffset(index * 48)
  }, [selected, items])

  return (
    <Wrapper>
      <Container onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <Highlight colors={colors} style={{ transform: `translateY(${offset}px)` }} />
        {items.map((item) => (
          <Link key={item.url} href={item.url}>
            <Item colors={colors}>{item.title}</Item>
          </Link>
        ))}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 10;
`

const Container = styled.div`
  width: 280px;
  position: relative;
  z-index: 0;
`
const Item = styled.div<PaletteProps>`
  height: 48px;
  padding: 0 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  font-weight: 600;
  color: ${({ colors }) => colors.text};
`
const Highlight = styled.div<PaletteProps>`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  background: ${({ colors }) => colors.opacity20};
  width: 100%;
  height: 48px;
  z-index: -1;
  transition: transform 0.15s ease;
`
