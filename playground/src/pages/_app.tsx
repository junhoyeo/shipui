import { AppProps } from 'next/app'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <div id="portal" />
    </React.Fragment>
  )
}

export default App
