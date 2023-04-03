import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useRef } from 'react'

import { PaletteProps, useColors } from '@/utils/colors'

import { TabProps } from './Tab'

export function SliderTab<T extends string>({ selected, items, onChange }: TabProps<T>) {
  const colors = useColors()
  const containerRef = useRef<HTMLUListElement>(null)

  return (
    <Container ref={containerRef}>
      {items.map((item, index) => {
        return (
          <TabItem
            id={item.value}
            key={`tab-${index}`}
            onClick={() => onChange?.(item)}
            selected={selected === item.value}
            colors={colors}
          >
            {item.label(selected === item.value)}
          </TabItem>
        )
      })}
    </Container>
  )
}

const Container = styled.ul`
  margin-bottom: 8px;
  width: 100%;
  position: relative;

  border-radius: 12px;

  display: flex;
  z-index: 0;
`
const TabItem = styled.div<{ selected: boolean } & PaletteProps>`
  padding: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  user-select: none;
  transition: all 0.16s ease;

  ${({ selected, colors }) =>
    selected
      ? css`
          color: ${colors.keyword};
        `
      : css`
          color: rgba(115, 118, 133, 0.4);
        `};
`
