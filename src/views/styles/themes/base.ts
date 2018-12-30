import { createTheme } from 'anoa-react-native-theme'

export const BaseTheme = createTheme(
  {
    // define theme variables
    spacing: {
      normal: 24
    },
    colors: {
      background: '#fcb119',
      text: '#fff'
    }
  },
  vars => ({
    // define theme styles
    screenContainer: {
      flex: 1,
      padding: vars.spacing.normal,
      backgroundColor: vars.colors.background
    }
  })
)
