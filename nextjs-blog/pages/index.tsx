// types
import { GetStaticProps } from 'next'

import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

/*
Since Static Generation happens once at build time,
it's not suitable for data that updates frequently or changes on every user request.

In cases like this, where your data is likely to change, you can use Server-side Rendering.
*/

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

/*
By returning allPostsData inside the props object in getStaticProps,
the blog posts will be passed to the Home component as a prop. 
*/
export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Mariquena</b>! <br />This is my first blog application developed in <b>Next.js</b> with TypeScript following its tutorial.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}