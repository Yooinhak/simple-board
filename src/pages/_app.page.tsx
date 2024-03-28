import type { AppProps } from "next/app";
import theme from "@components/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@components/GlobalStyle";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { atomHydrator } from "@modules/atomMap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GlobalLoading from "@components/GlobalLoading";
import FancyInput from "@components/FancyInput";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

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
        {loading && <GlobalLoading />}
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
