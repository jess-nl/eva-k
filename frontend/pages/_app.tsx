import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles.css";

const theme = extendTheme({
  fonts: {
    heading: "AndersonGrotesk-Light",
    body: "AndersonGrotesk-Light",
  },
});

function App({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
