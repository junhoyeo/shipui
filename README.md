<h1 align="center">
ShipUI
</h1>

<blockquote align="center">
  ⚓️ UI components to ship stuff
</blockquote>

<p align="center">
   <a aria-label="NPM version" href="https://www.npmjs.com/package/shipui">
    <img alt="" src="https://img.shields.io/npm/v/shipui.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge&labelColor=000" />
  </a>
</p>

> **Warning**<br/>
> This library is still under rapid development 🛠

## 📦 Installation and Usage

```bash
yarn add shipui
# Or with NPM
npm install shipui
```

```tsx
// utils/colors.ts
import { DefaultColors, Palette } from 'shipui'

export const Colors: Palette = {
  ...DefaultColors,
}
```

```tsx
// pages/_app.tsx
import { AppProps } from 'next/app'
import React from 'react'
import { ColorProvider, LoadingProgress, MetaHead, useLoadingProgressProps, MetaData } from 'shipui'

import { colors } from '@/utils/colors'

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
      <ColorProvider value={colors}>
        <LoadingProgress {...loadingProps} />
        <Component {...pageProps} />
        <div id="portal" />
      </ColorProvider>
    </React.Fragment>
  )
}

export default App
```
