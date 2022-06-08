import '../scss/index.scss';
import { GlobalTheme } from '@carbon/react';

export default function App({ Component, pageProps }) {
  return (
    <GlobalTheme theme="g90">
      <Component {...pageProps} />
    </GlobalTheme>
  );
}
