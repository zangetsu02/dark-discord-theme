import { DiscordTheme, colors } from './colors'

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
  soft?: boolean
  black?: boolean
}

function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr))
    return arr
  return [arr]
}

function getColors(style: 'light' | 'dark'): typeof colors {
  if (style === 'dark') {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors: any = {}
    Object.entries(colors).forEach(([name, val]) => {
      if (name === 'black')
        darkColors.white = val

      else if (name === 'white')
        darkColors.black = val

      else
        darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  }
  else {
    return colors
  }
}

export function createThemeHelpers({ color, soft = false, black = false }: GetThemeOptions) {
  const pick = (options: { light?: string, dark?: string }) => options[color]

  const v = (key: keyof typeof DiscordTheme, op = '') => {
    return DiscordTheme[key]
  }

  const colors = getColors(color)

  return {
    pick,
    colors,
    v,
  }
}
