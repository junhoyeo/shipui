import styled from '@emotion/styled'
import Link from 'next/link'
import { useCallback, useState } from 'react'

import { Colors } from '@/utils/colors'

export type SidebarItem = { title: string; url: string }
export type SidebarProps = {
  selected?: string
  items: SidebarItem[]
}

export const Sidebar: React.FC<SidebarProps> = ({ selected, items }) => {
  const [offset, setOffset] = useState<number>(0)

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement
      const index = items.indexOf(items.find((item) => item.title === target.innerText.trim()))
      setOffset(index * 48)
    },
    [items],
  )

  const onMouseLeave = useCallback(() => {
    const index = !selected ? 0 : items.indexOf(items.find((item) => item.url === selected))
    setOffset(index * 48)
  }, [selected, items])

  return (
    <Wrapper>
      <Container onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <Highlight style={{ transform: `translateY(${offset}px)` }} />
        {items.map((item) => (
          <Link key={item.url} href={item.url}>
            <Item>{item.title}</Item>
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
const Item = styled.div`
  height: 48px;
  padding: 0 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  font-weight: 600;
  color: ${Colors.text};
`
const Highlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  background: ${Colors.active};
  width: 100%;
  height: 48px;
  z-index: -1;
  transition: transform 0.15s ease;
`
