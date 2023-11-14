import { ChakraProvider } from "@chakra-ui/react";

function ProductApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps}></Component>
    </ChakraProvider>
  );
}

export default ProductApp;
