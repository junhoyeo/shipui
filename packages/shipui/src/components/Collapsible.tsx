import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Box } from './Box'
import { Col } from './Col'
import { Row } from './Row'

export type CollapsibleProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  title?: React.ReactNode
  children?: React.ReactNode
  gap?: undefined
}

export const Collapsible: React.FC<CollapsibleProps> = ({ title, children, gap = 16, ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState<number>(0)

  useEffect(() => {
    if (!isOpen || !contentRef || !contentRef.current) {
      return
    }

    const adjustHeight = () =>
      setTimeout(() => {
        if (!isOpen || !contentRef || !contentRef.current) {
          return
        }
        const height = parseInt(window.getComputedStyle(contentRef.current).height)
        setMaxHeight(height)
      })

    const handleResize = () => {
      adjustHeight()
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const onClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('a')) {
      return
    }
    setOpen((prev) => !prev)
  }, [])

  return (
    <Wrapper onClick={onClick} style={{ gap }} {...props}>
      <Header style={{ marginBottom: isOpen ? 0 : -gap }}>
        {title}
        <DownIcon open={isOpen} />
      </Header>
      <Container style={{ height: !isOpen ? 0 : maxHeight }}>
        <Col className="Collapsible-content" ref={contentRef} style={{ paddingBottom: 4 }}>
          {isOpen && children}
        </Col>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  cursor: pointer;
`

const Header = styled(Row)`
  user-select: none;
`
const Container = styled.div`
  overflow: hidden;
  transition: all 0.2s ease;
`

const _DownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" {...props}>
    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
  </svg>
)
const DownIcon = styled(_DownIcon)<{ open: boolean }>`
  height: 20px;
  width: 20px;
  margin-left: 6px;
  transition: transform 0.16s ease;

  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `};
`
