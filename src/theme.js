import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    // heading: `'Open Sans', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
})

export default theme