import type { AppProps } from 'next/app';
import theme from '@components/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@components/GlobalStyle';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { atomMapKey } from '@modules/atomMap';
import { testAtom } from '@modules/post/atom';

export default function App({ Component, pageProps }: AppProps) {
  const { initialData: pageInitialData } = pageProps;
  const initialRecoilState = {};
  // console.log(pageInitialData);

  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(testAtom, pageInitialData['posts']);
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
