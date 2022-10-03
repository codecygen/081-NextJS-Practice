// Next-Adding-Head-Tag-To-Root-Page-For-Every-Page-SEO
import Head from 'next/head';

import Layout from '../components/layout/Layout';
import { NotificationContextProvider } from '../store/notification-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        {/* Next-Adding-Head-Tag-To-Root-Page-For-Every-Page-SEO */}
        <Head>
          {/* Here we have title element. This title element servers as fallback.
        If the page has its own title element, then this section will be overwritten
        on that page. But if the page has no title tag, then the fallback title
        set here will be used. */}
          <title>Event App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp
