import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  font: {
    head: '"TurismoCF-Heavy", sans-serif',
    subhead: '"TurismoCF-Medium", sans-serif',
    base: "Ubuntu, sans-serif",
    code: '"Ubuntu Mono", monospace',
  },
  colors: {
    green: "rgba(15, 169, 88, 1)",
    blue: "rgba(0, 41, 255, 1)",
    yellow: "rgba(255, 199, 0, 1)",
    ocean: "rgba(0, 209, 222, 1)",
    red: "rgba(254, 24, 24, 1)",
    violet: "rgba(123, 97, 255, 1)",
    gray700: "rgba(131, 131, 131, 1)",
    white: "rgba(255, 255, 255, 1)",
    black: "rgba(0, 0, 0, 1)",
  },
  borderWidths: {
    chunky: "8px",
    fat: "4px",
    regular: "2px",
    thin: "1px",
  },
  fontSizes: {
    small: "0.75rem",
    base: "1rem",
    baseL: "1.13rem",
    sub: "1.5rem",
    h: "2.25rem",
    hL: "2.63rem",
    hxl: "3.38rem",
    hXxl: "3.88rem",
  },
  fontWeights: {
    black: 900,
    bold: 700,
    medium: 500,
    regular: 400,
    light: 300,
  },
  letterSpacings: {
    extraWhide: "0.08em",
    whideI: "0.05em",
    whide: "0.03em",
    normal: "0em",
    thin: "-0.03em",
    thinI: "-0.05em",
    extraThin: "-0.08em",
  },
  lineHeights: {
    lh165: "1.65",
    lh150: "1.50",
    lh135: "1.35",
    lh120: "1.20",
    lh100: "1.00",
  },
  mediaQueries: {
    mobile: "only screen and (max-width: 40rem)",
    tablet: "only screen and (max-width: 60rem)",
    desktop: "only screen and (max-width: 74rem)",
    wide: "only screen and (max-width: 120rem)",
  },
  opacities: {
    opaque: 1,
    disabled: 0.65,
    semiOpaque: 0.5,
    aqua: 0.1,
    transparent: 0,
  },
  radii: {
    circle: "100px",
    smooth: "12px",
    soft: "8px",
    rounded: "4px",
    light: "2px",
    hard: "0px",
  },
  shadows: {
    shadRed: "2px 2px 0px rgba(0, 0, 0, 1), 10px 10px 0px rgba(254, 24, 24, 1)",
    shadBlue: "2px 2px 0px rgba(0, 0, 0, 1), 10px 10px 0px rgba(0, 41, 255, 1)",
    shadYell:
      "2px 2px 0px rgba(0, 0, 0, 1), 10px 10px 0px rgba(255, 199, 0, 1)",
    shad400: "6px 6px 0px rgba(0, 0, 0, 1)",
    shad200: "4px 4px 0px rgba(0, 0, 0, 1)",
    shad100: "2px 2px 0px rgba(0, 0, 0, 1)",
  },
  spacings: {
    huge: "4rem",
    large: "3rem",
    big: "2.25rem",
    normal: "1.5rem",
    small: "1rem",
    xsml: "0.5rem",
  },
  zIndices: {
    maxtop: 300,
    top: 100,
    focus: 10,
    higher: 2,
    high: 1,
    regular: 0,
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.base};
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.black};
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CjxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjREJEQkRCIj48L3JlY3Q+CjxyZWN0IHg9IjgiIHk9IjgiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNEQkRCREIiPjwvcmVjdD4KPC9zdmc+");
  }
  
  body {
    line-height: ${({ theme }) => theme.lineHeights.lh150};
    letter-spacing: ${({ theme }) => theme.letterSpacings.normal};
    
  
  }
`
