import { ChakraProvider } from "@chakra-ui/react";
import "../styles.css";

function App({ Component, pageProps }: any) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
