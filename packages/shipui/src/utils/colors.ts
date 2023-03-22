import { createContext, useContext } from 'react'

export type Palette = {
  primary: string
  opacity65: string
  opacity40: string
  opacity35: string
  opacity20: string
  text: string
  keyword: string
  background: string
  foreground: string
}
export type PaletteProps = { colors: Palette }

export const createPalette = (primary: { r: number; g: number; b: number }): Palette => {
  const rgb = `${primary.r}, ${primary.g}, ${primary.b}`
  return {
    primary: `rgb(${rgb})`,
    opacity65: `rgba(${rgb}, 0.65)`,
    opacity40: `rgba(${rgb}, 0.4)`,
    opacity35: `rgba(${rgb}, 0.35)`,
    opacity20: `rgba(${rgb}, 0.2)`,
    text: '#737685',
    keyword: '#132d49',
    background: '#f3f4f5',
    foreground: '#fff',
  }
}
export const DefaultColors = createPalette({ r: 28, g: 92, b: 255 })

export const ColorContext = createContext<Palette>(DefaultColors)
export const ColorProvider = ColorContext.Provider
export const useColors = () => useContext(ColorContext)
