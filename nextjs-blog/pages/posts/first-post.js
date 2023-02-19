import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* 
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          // controls when the third-party script should load
          strategy="lazyOnload"
          // used to run any JavaScript code immediately after the script has finished loading
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      */}
      <h1>First Post</h1>
      <h2>
        <Link href='/'>← Back to home</Link>
      </h2>
    </Layout>
  );
}
