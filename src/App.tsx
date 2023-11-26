import { SearchContextProvider } from './contexts/SearchContentProvider';
import { AppProps } from 'next/app';
import RootLayout from './layouts/RootLayout/RootLayout';

function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SearchContextProvider>
  );
}

export default App;
