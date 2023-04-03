import styled from '@emotion/styled'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Box } from './Box'

export type TabOption<T extends string> = {
  value: T
  label: (selected: boolean) => React.ReactNode
}
export type TabProps<T extends string> = Omit<React.HTMLAttributes<HTMLUListElement>, 'onChange'> & {
  selected: T
  items: TabOption<T>[]
  onChange: (option: TabOption<T>) => void
}

export function Tab<T extends string>({ selected, items, onChange, ...props }: TabProps<T>) {
  const containerRef = useRef<HTMLUListElement>(null)
  const [tabWidth, setTabSize] = useState<number>(0)
  const [paddingLeft, setPaddingLeft] = useState<number>(0)

  const recalculateTabSize = useCallback(() => {
    if (!containerRef.current) {
      return
    }
    let width = parseInt(window.getComputedStyle(containerRef.current).width) || 0
    width -= 12
    setTabSize(width / items.length)

    const paddingLeft = parseInt(window.getComputedStyle(containerRef.current).paddingLeft) || 0
    setPaddingLeft(paddingLeft)
  }, [items.length])

  useEffect(() => {
    recalculateTabSize()

    window.addEventListener('resize', recalculateTabSize)
    return () => window.removeEventListener('resize', recalculateTabSize)
  }, [recalculateTabSize])

  const tabIndex = useMemo(() => items.findIndex((v) => selected === v.value), [items, selected])
  const [left, setLeft] = useState<number>(0)

  useEffect(() => setLeft(tabIndex * tabWidth + paddingLeft), [tabIndex, tabWidth, paddingLeft])

  return (
    <Container ref={containerRef} {...props}>
      {items.map((item, index) => {
        const isSelected = selected === item.value
        return (
          <TabItem
            className={`tab-item${isSelected ? ' selected' : ''}`}
            id={item.value}
            key={`tab-${index}`}
            onClick={() => onChange?.(item)}
          >
            {item.label(isSelected)}
          </TabItem>
        )
      })}
      {tabWidth > 0 && tabIndex !== -1 && (
        <TabIndicator
          className="tab-indicator"
          style={{
            width: tabWidth,
            left,
          }}
        />
      )}
    </Container>
  )
}

const Container = styled.ul`
  padding: 6px 7px;
  width: 100%;
  height: 56px;
  position: relative;

  background-color: #f3f4f5;
  border-radius: 12px;

  display: flex;
  z-index: 0;
`
const TabItem = styled.li`
  padding: 16px 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  user-select: none;
`

const TabIndicator = styled(Box)`
  padding: 0;
  height: 44px;
  border-radius: 12px;
  position: absolute;
  top: 6px;
  bottom: 6px;
  transition: left 0.2s ease;
  z-index: -1;
`
