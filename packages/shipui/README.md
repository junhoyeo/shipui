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
# Or with npm
npm install shipui
```

```js
// next.config.js
module.exports = {
  compiler: {
    emotion: true,
  },
}
```

```tsx
// @/utils/colors.ts
import { createPalette } from 'shipui'

export const Colors = createPalette({ r: 166, g: 115, b: 255 })
```

```tsx
// @/pages/_app.tsx
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
```
