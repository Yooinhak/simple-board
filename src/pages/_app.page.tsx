import type { AppProps } from "next/app";
import theme from "@components/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@components/GlobalStyle";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Simple_board</title>
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
