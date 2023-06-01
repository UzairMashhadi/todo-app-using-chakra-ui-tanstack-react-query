import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: '#fff',
    secondary: '#607d8b',
    button: "red",
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Roboto, sans-serif',
  },
  // Other theme customizations
});
export default theme;
