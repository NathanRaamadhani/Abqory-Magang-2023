import { MantineThemeOverride } from "@mantine/core"
import { inter } from "./fonts"

const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: inter.style.fontFamily,
  },
  defaultRadius: "sm",
  colors: {
    abqory: [
      "#E6ECFE",
      "#B9CBFD",
      "#8CAAFC",
      "#5F88FB",
      "#3367FA",
      "#0646F9",
      "#0538C7",
      "#032A96",
      "#021C64",
      "#010E32",
    ],
  },
  primaryColor: "abqory",
  globalStyles: (theme) => ({
    a: {
      color: "#0646F9",
    },
    ".abqory-main-layout": {
      backgroundColor: "#FDFDFD",
      scrollBehavior: "smooth",
    },
  }),
}

export default theme
