import { AppProps } from 'next/app'
import React from 'react'
import { ColorProvider, LoadingProgress, MetaData, MetaHead, useLoadingProgressProps } from 'shipui'

import { Colors } from '@/utils/colors'

// FIXME: Declare website's default metadata here
const meta: MetaData = {
  title: 'ShipUI',
  description: 'UI components to ship stuff',
  image: 'https://www.junho.io/assets/og-image.jpg',
  url: 'https://junho.io',
  canonical: 'https://junho.io',
  themeColor: '#fff',
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const loadingProps = useLoadingProgressProps()

  return (
    <React.Fragment>
      <MetaHead {...meta} />
      <ColorProvider value={Colors}>
        <LoadingProgress {...loadingProps} />
        <Component {...pageProps} />
        <div id="portal" />
      </ColorProvider>
    </React.Fragment>
  )
}

export default App
