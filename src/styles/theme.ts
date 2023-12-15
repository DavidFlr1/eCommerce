import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  ...config,
  colors: {
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    }
  },
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: 'Avenir',
      },
      '::placeholder': {
        color: 'rgba(0, 0, 0, 0.36)',
      },
    }),
  },
})

export default theme
