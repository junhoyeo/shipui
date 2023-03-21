import styled from '@emotion/styled'
import { useNProgress } from '@tanem/react-nprogress'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { PaletteProps, useColors } from '@/utils/colors'

export const useLoadingProgressProps = () => {
  const router = useRouter()

  const [loadingState, setLoadingState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoadingState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setLoadingState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  useEffect(() => {
    document.querySelector('body')?.classList.remove('preload')
  }, [])

  return {
    isRouteChanging: loadingState.isRouteChanging,
    key: loadingState.loadingKey,
  }
}

export type LoadingProgressProps = {
  isRouteChanging: boolean
}

export const LoadingProgress: React.FC<LoadingProgressProps> = ({ isRouteChanging }) => {
  const colors = useColors()

  const props = useNProgress({
    isAnimating: isRouteChanging,
  })

  return (
    <Container colors={colors} {...props}>
      <div />
    </Container>
  )
}

const Container = styled.div<
  PaletteProps & {
    isFinished: boolean
    animationDuration: number
    progress: number
  }
>`
  opacity: ${({ isFinished }) => (isFinished ? 0 : 1)};
  pointer-events: none;
  transition: opacity ${({ animationDuration }) => animationDuration}ms linear;

  /* bar */
  & > div {
    margin-left: ${({ progress }) => (-1 + progress) * 100}%;
    width: 100%;
    height: 6px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    background: ${({ colors }) => colors.primary};
    transition: margin-left ${({ animationDuration }) => animationDuration}ms linear;
  }
`
