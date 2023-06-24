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
  // breakpoints: {
  //   sm: '30em', // 480px
  //   md: '48em', // 768px
  //   lg: '62em', // 992px
  //   xl: '80em', // 1280px
  //   '2xl': '96em', // 1536px
  // }
})

export default theme