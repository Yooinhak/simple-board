import type { AppProps } from "next/app";
import theme from "@components/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@components/GlobalStyle";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { atomHydrator } from "@modules/atomMap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        atomHydrator({ initialData: pageProps, recoilSetter: set });
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Simple_board</title>
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
