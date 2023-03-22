import { createContext, useContext } from 'react'

export const DefaultColors = {
  primary: '#1c5cff',
  opacity65: 'rgba(28, 92, 255, 0.65)',
  opacity40: 'rgba(28, 92, 255, 0.4)',
  opacity35: 'rgba(28, 92, 255, 0.35)',
  opacity20: 'rgba(28, 92, 255, 0.2)',
  active: 'rgba(28, 92, 255, 0.4)',
  text: '#737685',
  keyword: '#132d49',
  background: '#f3f4f5',
  foreground: '#fff',
}

export type Palette = typeof DefaultColors
export type PaletteProps = { colors: Palette }

export const ColorContext = createContext<Palette>(DefaultColors)
export const ColorProvider = ColorContext.Provider
export const useColors = () => useContext(ColorContext)
