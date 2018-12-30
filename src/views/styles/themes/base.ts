import { createTheme } from 'anoa-react-native-theme'

export const BaseTheme = createTheme(
  {
    // define theme variables
    spacing: {
      normal: 24
    }
  },
  vars => ({
    // define theme styles
    screenContainer: {
      padding: vars.spacing.normal
    }
  })
)
